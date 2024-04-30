const Setting = require('./../models/settingModel');
const catchAsync = require('./../utils/catchAsync');
const Car = require('./../models/carModel');


exports.update = catchAsync(async (req, res, next) => {
  const setting = await Setting.findById(req.params.id);
  if (!setting)
    return next(new AppError('There is no setting with this Id!', 404));

  const { email1, email2, phone1, phone2, name1, name2, intro1, intro2 } =
    req.body;
  
  const images = req.files.map((el) => el.filename);

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
      slider: images.length > 0 ? [...images] : [...setting.slider],
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
  setting.carsCount = carsCount;
  res.send(setting);
});

exports.add = async (req, res, next) => {
  console.log(req.files);
  const slider = req.files.map((el) => el.filename);
  const setting = await Setting.create({ ...req.body, slider });
  res.send(setting);
};