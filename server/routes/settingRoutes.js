const router = require('express').Router();
const settingController = require('./../controllers/settingController-s3');
const authController = require('./../controllers/authController');
// const { uploadFile } = require('./../utils/upload');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', settingController.get);

router.patch(
  '/:id',
  authController.protect,
  authController.restrictTo('admin'),
  upload.array('slider'),
  settingController.update
);

router.post(
  '/',
  authController.protect,
  authController.restrictTo('admin'),
  upload.array('slider'),
  settingController.add
);

// router.patch(
//   '/:id',
//   authController.protect,
//   authController.restrictTo('admin'),
//   uploadFile('slider', 'slider', 'image').array('slider'),
//   settingController.update
// );

// router.post(
//   '/',
//   uploadFile('slider', 'slider', 'image').array('slider'),
//   settingController.add
// );

module.exports = router;
