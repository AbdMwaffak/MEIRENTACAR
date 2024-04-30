const Car = require('../models/carModel');
const Features = require('../utils/features');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');


function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

exports.search = (req, res) => {
  const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  const regexCars = Car.find({ name: regex, description: regex });
  const cars = Car.find({ $name: { $search: `"${req.query.search}"` } });

  res.json({ regexCars, cars });
};

exports.addCar = catchAsync(async (req, res, next) => {
  const images = [];
  for (let i = 0; i < req.files.length; i++) {
    images.push(req.files[i].filename);
  }
  await Car.create({ ...req.body, images });
  res.status(201).send('Car Added successfully!');
});

exports.getAllCars = catchAsync(async (req, res, next) => {
  const features = new Features(Car.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  // const mostPopularityCars = await Car.find().sort({popularity : -1});
  const cars = await features.query.sort({ createAt: -1 });
  res.status(200).json(cars);
});

exports.getCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) return next(new AppError('There is no car with this Id!', 404));

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

  const mostPop = await Car.find().sort({ popularity: -1 });
  suggestedCars = [
    ...suggestedCars,
    ...mostPop.filter((d) => {
      if (!ids.has(d.id) && d.id != car.id) return d;
    }),
  ];

  res.send(suggestedCars.slice(0, 8));
});

exports.updateCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);
  if (!car) return next(new AppError('There is no car with this Id!', 404));

  const images = req.files.map((el) => el.filename);

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
      images: images.length > 0 ? images : car.images,
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
    return next(new AppError('There is no car with that Id!', 404));
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
