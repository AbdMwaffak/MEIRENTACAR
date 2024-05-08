const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A car must have a name'],
    },

    brand: String,

    ratingsAverage: {
      type: Number,
      // default : 4,
      min: 1,
      max: 5,
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    color: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: {
        values: ['luxury', 'sport', 'suv', 'convertible'],
        message: 'category is either [Luxury , Sport , Suv , Convertible]',
      },
    },

    model: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: [true, 'A car must have a daily rental price'],
    },
    priceWeekly: {
      type: Number,
      required: [true, 'A car must have a weekly rental price'],
    },
    priceMonthly: {
      type: Number,
      required: [true, 'A car must have a monthly rental price'],
    },

    gear: {
      type: String,
      enum: {
        values: ['manual', 'auto'],
        message: 'gear is either [manual or Auto]',
      },
    },

    powerHorse: {
      type: String,
    },

    seats: {
      type: Number,
      required: [true, 'A car must have number of seaters'],
    },
    images: [String],

    speed: Number,

    description: String,

    popularity: {
      type: Number,
      default: 0,
    },

    available: {
      type: Boolean,
      default: true,
    },

    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
