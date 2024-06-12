const router = require('express').Router();
const carController = require('../controllers/carController-s3');
const authController = require('./../controllers/authController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.patch('/quick', carController.quickEdits);
router.post(
  '/',
  authController.protect,
  authController.restrictTo('admin'),
  upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'mainImage', maxCount: 1 },
  ]),
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
  upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'mainImage', maxCount: 1 },
  ]),
  carController.updateCar
);

module.exports = router;
