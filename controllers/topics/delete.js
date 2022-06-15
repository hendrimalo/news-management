const Topics = require('../../models/topics');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const topics = await Topics.findByIdAndDelete({ _id: id });

    res.status(200).json({
      status: 'success',
      message: `${topics.name} success deleted`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
