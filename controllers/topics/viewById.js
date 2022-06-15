const Topics = require('../../models/topics');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const topics = await Topics.findById({ _id: id });

    if (!topics) {
      res.status(404).json({
        status: 'error',
        message: 'data not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: topics,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
