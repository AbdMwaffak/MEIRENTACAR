const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const AppError = require('./utils/appError');
const bodyParser = require('body-parser');
const globalErrorHandler = require('./controllers/errorController');
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const settingRoutes = require('./routes/settingRoutes');

dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, '../client/build')));
app.set('trust proxy', 1);
////
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: 'Too many requests from this IP , please try again in an hour!',
});

app.use('/', limiter);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(mongoSanitizer());
app.use(xss());

app.use(
  hpp({
    whitelist: [
      'price',
      'category',
      'color',
      'brand',
      'name',
      'model',
      'gear',
      'seats',
    ],
  })
);

app.use(express.static('public'));

app.use('/cars', carRoutes);
app.use('/users', userRoutes);
app.use('/settings', settingRoutes);
app.use(globalErrorHandler);

app.all('*', (req, res, next) => {
  return next(new AppError('This route is not exist', 404));
});

module.exports = app;
