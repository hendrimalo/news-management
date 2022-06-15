const validator = require('validator');
const { isEmpty } = require('./index');

module.exports = {
  validatiorNews: (data) => {
    const errors = {};

    data.topicId = !isEmpty(data.topicId) ? data.topicId : '';
    data.image = !isEmpty(data.image) ? data.image : '';
    data.title = !isEmpty(data.title) ? data.title : '';
    data.desc = !isEmpty(data.desc) ? data.desc : '';
    data.author = !isEmpty(data.author) ? data.author : '';

    if (!validator.isLength(data.title, { min: 6, max: 60 })) errors.title = 'Min length title 6 max 60';
    if (!validator.isLength(data.desc, { min: 4, max: 40 })) errors.desc = 'Min length desc 6 max 60';
    if (!validator.isLength(data.author, { min: 6, max: 60 })) errors.author = 'Min length author 6 max 60';
  },
};
