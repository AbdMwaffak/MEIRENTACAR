const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
// const cors = require('cors');
const AppError = require('./utils/appError');
const bodyParser = require('body-parser');
const globalErrorHandler = require('./controllers/errorController');
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const settingRoutes = require('./routes/settingRoutes');

dotenv.config();
const app = express();
// app.use(cors());
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Origin', '161.35.198.230'); // update to match the domain you will make the request from
  next();
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.set('trust proxy', 1);
////
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 100,
//   standardHeaders: 'draft-7',
//   legacyHeaders: false,
//   message: 'Too many requests from this IP , please try again in an hour!',
// });

// app.use('/', limiter);

// app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
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

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../clinet/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.all('*', (req, res, next) => {
  return next(new AppError('This route is not exist', 404));
});

module.exports = app;
