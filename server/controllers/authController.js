const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const {promisify} = require('util');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
}

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
      token,
      user
  });
}

exports.signUp = catchAsync(async(req, res, next) => {

  const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      role: req.body.role,

  });

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async(req, res, next) => {

  const { email, password } = req.body;

  // 1) check if email and password are inputted
  if (!email || !password) {
      return next(new AppError('please provide email and password', 404));
  }
  // 2) check if email is exist and pasword is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new AppError('Incorrect Email or password!', 401));
}
  const comparePasswords = await user.correctPassword(password, user.password);

  if (!comparePasswords) {
      return next(new AppError('Incorrect email or Password!', 401));
  }

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  console.log("req.headers" , req.headers)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The user belonging to this token does not longer exist!', 401));
  }

  // if (currentUser.changedPasswordAfter(decoded.iat)) {
  //   return next(new AppError('User recently changed password , please login again!', 401));
  // }
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(new AppError('You do not have permission to perform this action', 403)); // Forbidden!
    }
    next();
  };
};
