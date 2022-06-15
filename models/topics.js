const mongoose = require('mongoose');

const topicsSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please check input name'],
    unique: true,
    minLength: [4, 'min length input author 4 character'],
    maxLength: [40, 'max length input author 40 character'],
  },
});

module.exports = mongoose.model('Topics', topicsSchema);
