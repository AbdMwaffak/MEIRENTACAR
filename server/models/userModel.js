const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false
},
confirmPassword: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator: function(el) {
            return el === this.password;
        },
        message: 'passwords are not the same!'
    }
},
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function(candinatePassword, userPassword) {
  return await bcrypt.compare(candinatePassword, userPassword);

}


const User = mongoose.model('User', userSchema);

module.exports = User;