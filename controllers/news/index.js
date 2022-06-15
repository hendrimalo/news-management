const actionCreate = require('./create');
const actionEdit = require('./edit');
const actionViewByTags = require('./tags');
const actionDelete = require('./delete');
const actionViewAll = require('./viewAll');
const actionViewById = require('./viewById');
const actionViewByTopic = require('./topics');

module.exports = {
  actionCreate,
  actionEdit,
  actionDelete,
  actionViewAll,
  actionViewById,
  actionViewByTopic,
  actionViewByTags,
};
