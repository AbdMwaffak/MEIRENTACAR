const router = require('express').Router();
const carController = require('../controllers/carController-s3');
const authController = require('./../controllers/authController');
// const { uploadFile } = require('../utils/upload');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/',
  authController.protect,
  authController.restrictTo('admin'),
  upload.array('images'),
  carController.addCar
);

router.get('/', carController.getAllCars);

router.patch(
  '/changeState/:id',
  authController.protect,
  carController.changeCarState
);

router.get('/suggestedCars/:id', carController.getSuggestedCar);

router.get('/:id', carController.getCar);

router.patch(
  '/:id',
  authController.protect,
  authController.restrictTo('admin'),
  upload.array('images'),
  carController.updateCar
);
// router.patch(
//   '/:id',
//   authController.protect,
//   authController.restrictTo('admin'),
//   uploadFile('cars', 'car', 'image').array('images'),
//   carController.updateCar
//   );

// router.post(
//   '/',
//   authController.protect,
//   authController.restrictTo('admin'),
//   uploadFile('cars', 'car', 'image').array('images'),
//   carController.addCar
// );
module.exports = router;
