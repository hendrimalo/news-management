const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const tagsSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please input data name'],
    unique: true,
  },
  newsId: {
    type: ObjectId,
    ref: 'News',
    require: [true, 'Please input data news'],
  },
});

module.exports = mongoose.model('Tags', tagsSchema);
