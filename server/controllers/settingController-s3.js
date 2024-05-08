const Setting = require('./../models/settingModel');
const catchAsync = require('./../utils/catchAsync');
const Car = require('./../models/carModel');

const crypto = require('crypto');
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
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

exports.update = catchAsync(async (req, res, next) => {
  const setting = await Setting.findById(req.params.id);
  if (!setting)
    return next(new AppError('There is no setting with this Id!', 404));

  const { email1, email2, phone1, phone2, name1, name2, intro1, intro2 } =
    req.body;
  let images = [];
  if (req.files.length > 0) {
    for (let i = 0; i < req.files.length; i++) {
      const imageName = randomImageName();
      const params = {
        Bucket: bucketName,
        Key: imageName,
        Body: req.files[i].buffer,
        ContentType: req.files[i].mimetype,
      };
      const command = new PutObjectCommand(params);
      await s3.send(command);
      images = [...images, imageName];
    }
  }

  const updatedSetting = await Setting.findByIdAndUpdate(
    req.params.id,
    {
      email1,
      email2,
      phone1,
      phone2,
      name1,
      name2,
      intro1,
      intro2,
      slider: req.files.length > 0 ? [...images] : [...setting.slider],
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.send(updatedSetting);
});

exports.get = catchAsync(async (req, res, next) => {
  const settings = await Setting.find();
  const setting = settings[0];
  const carsCount = await Car.countDocuments({});
  let awsImages = [];
  for (let i = 0; i < setting.slider.length; i++) {
    const url = 'https://dx7z2a433bgtj.cloudfront.net/' + setting.slider[i];
    awsImages = [...awsImages, url];
  }
  setting.slider = [...awsImages];
  setting.carsCount = carsCount;
  res.send(setting);
});

exports.add = async (req, res, next) => {
  let slider = [];
  for (let i = 0; i < req.files.length; i++) {
    const imageName = randomImageName();
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: req.files[i].buffer,
      ContentType: req.files[i].mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    slider = [...slider, imageName];
  }

  const setting = await Setting.create({ ...req.body, slider });

  res.send(setting);
};

// Secure the web app
// Test

// upload images to AWS
// Change images URLs in frontend
// deploy
