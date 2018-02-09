const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name Required']
  },
  phone: {
    type: Number,
    required: [true, 'Number Required']
  },
  country: {
    type: String
  },
  facebookId: {
    type: String
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
