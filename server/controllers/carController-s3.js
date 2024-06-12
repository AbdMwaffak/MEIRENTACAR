const Car = require('../models/carModel');
const Features = require('../utils/features');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

const crypto = require('crypto');
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

exports.search = (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const regexCars = Car.find({ name: regex, description: regex });
  const cars = Car.find({ $name: { $search: `"${req.query.search}"` } });

  res.json({ regexCars, cars });
};

async function store_S3(file, imageName) {
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);
}

exports.addCar = catchAsync(async (req, res, next) => {
  const images = [];

  const imageName = randomImageName();
  store_S3(req.files.mainImage[0], imageName);

  for (let i = 0; i < req.files.images.length; i++) {
    const imageName = randomImageName();
    await store_S3(req.files.images[i], imageName);
    images.push(imageName);
  }

  await Car.create({ ...req.body, images, mainImage: imageName });
  res.status(201).send('Car Added successfully!');
});

exports.getAllCars = catchAsync(async (req, res, next) => {
  const features = new Features(Car.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const cars = await features.query.sort({ createAt: -1 });

  for (const car of cars) {
    let awsImages = [];
    for (let i = 0; i < car.images.length; i++) {
      const url = 'https://dx7z2a433bgtj.cloudfront.net/' + car.images[i];
      awsImages = [...awsImages, url];
    }
    car.images = [...awsImages];
    car.mainImage = 'https://dx7z2a433bgtj.cloudfront.net/' + car.mainImage;
  }

  res.status(200).json(cars);
});

exports.getCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) return next(new AppError('There is no car with this Id!', 404));

  let awsImages = [];
  for (let i = 0; i < car.images.length; i++) {
    // const getObjectParams = {
    //   Bucket: bucketName,
    //   Key: car.images[i],
    const url = 'https://dx7z2a433bgtj.cloudfront.net/' + car.images[i];
    awsImages = [...awsImages, url];
  }
  // const command = new GetObjectCommand(getObjectParams);
  // const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
  // awsImages = [...awsImages, url];
  // }
  car.images = [...awsImages];
  car.mainImage = 'https://dx7z2a433bgtj.cloudfront.net/' + car.mainImage;
  await Car.findByIdAndUpdate(req.params.id, {
    $inc: { popularity: 1 },
  });
  res.status(200).json({
    status: 'success',
    car,
  });
});

exports.getSuggestedCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.send('Car Not Found');
    // return next(new AppError('There is no car with this Id!', 404));
  }

  let suggestedCars = [];
  let ids = new Set(suggestedCars.map((d) => d.id));

  const similarCars = await Car.find({ brand: car.brand, available: true });
  suggestedCars = [...similarCars].filter((d) => {
    if (!ids.has(d.id) && d.id != car.id) {
      ids.add(d.id);
      return d;
    }
  });

  const mostPop = await Car.find({ available: true }).sort({ popularity: -1 });
  suggestedCars = [
    ...suggestedCars,
    ...mostPop.filter((d) => {
      if (!ids.has(d.id) && d.id != car.id) return d;
    }),
  ];
  for (const car of suggestedCars.slice(0, 12)) {
    let awsImages = [];
    for (let i = 0; i < car.images.length; i++) {
      const url = 'https://dx7z2a433bgtj.cloudfront.net/' + car.images[i];
      awsImages = [...awsImages, url];
    }
    car.images = [...awsImages];
    car.mainImage = 'https://dx7z2a433bgtj.cloudfront.net/' + car.mainImage;
  }

  res.send(suggestedCars.slice(0, 12));
});

exports.updateCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  console.log('files : ', req.files.mainImage);
  if (!car) return next(new AppError('There is no car with this Id!', 404));
  let images = [];
  let mainImage = '';
  if (req.files?.images?.length > 0) {
    for (let i = 0; i < req.files.images.length; i++) {
      const imageName = randomImageName();
      const params = {
        Bucket: bucketName,
        Key: imageName,
        Body: req.files.images[i].buffer,
        ContentType: req.files.images[i].mimetype,
      };
      const command = new PutObjectCommand(params);
      await s3.send(command);
      images = [...images, imageName];
    }
  }

  if (req.files?.mainImage?.length > 0) {
    const imageName = randomImageName();
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: req.files.mainImage[0].buffer,
      ContentType: req.files.mainImage[0].mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    mainImage = imageName;
  }

  const {
    name,
    brand,
    color,
    category,
    model,
    price,
    gear,
    seats,
    powerHorse,
    priceWeekly,
    priceMonthly,
    speed,
  } = req.body;

  await Car.findByIdAndUpdate(
    req.params.id,
    {
      name,
      brand,
      color,
      category,
      model,
      price,
      gear,
      seats,
      powerHorse,
      priceWeekly,
      priceMonthly,
      speed,
      images: req.files?.images?.length > 0 ? images : car.images,
      mainImage: req.files?.mainImage?.length > 0 ? mainImage : car.mainImage,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.send('Car Updated Successfully!');
});

exports.changeCarState = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    res.send('Car Not Found!');
    // return next(new AppError('There is no car with that Id!', 404));
  }

  await Car.findByIdAndUpdate(
    req.params.id,
    {
      available: !car.available,
    },
    {
      runValidators: true,
    }
  );
  res.send('Car State Has Changed ❤');
});

exports.search = catchAsync(async (req, res, next) => {});

exports.quickEdits = async (req, res, next) => {
  try {
    const cars = await Car.find();
    for (let i = 0; i < cars.length; i++) {
      let car = await Car.findById(cars[i].id);
      car.mainImage = car.images[0];
      await car.save();
    }
    res.send(cars);
  } catch (err) {
    console.log(err);
  }
};

/* return next(
  new AppError(
    'This route is not for password updates. Please use /updateMyPassword.',
    400
  )
);*/

// Update Car : [Patch , http://localhost:3000/cars/id] Body : {updated fields}
// Change Car State : [Patch , http://localhost:3000/cars/changeState/id] Body : {}
//
