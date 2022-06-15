const Topics = require('../../models/topics');

module.exports = async (req, res) => {
  try {
    const topics = await Topics.find();

    if (topics.length <= 0) {
      res.status(404).json({
        status: 'success',
        message: 'data topics not found',
      });
    }

    res.status(200).json({
      data: topics,
    });
  } catch (error) {
    res.status({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
