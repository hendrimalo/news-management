const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const newsSchema = mongoose.Schema({
  topicId: {
    type: ObjectId,
    ref: 'Topics',
    require: true,
  },
  image: {
    type: String,
    require: [true, 'Please input data image'],
  },
  title: {
    type: String,
    require: [true, 'Please input data title'],
    minLength: [6, 'min length title 6 character'],
    maxLength: [60, 'min length title 6 character'],
  },
  desc: {
    type: String,
    require: [true, 'Please check input desc'],
    minLength: [4, 'min length input desc 4 character'],
    maxLength: [40, 'max length input desc 40 character'],
  },
  author: {
    type: String,
    require: [true, 'Please check input author'],
    minLength: [4, 'min length input author 4 character'],
    maxLength: [40, 'max length input author 40 character'],
  },
  status: {
    type: String,
    enum: ['draft', 'deleted', 'publish'],
    default: 'publish',
  },
  created_at: {
    type: Date,
    require: true,
  },
  updated_at: {
    type: Date,
  },
});

module.exports = mongoose.model('News', newsSchema);
