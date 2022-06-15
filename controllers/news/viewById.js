const News = require('../../models/news');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findById({ _id: id }).populate('topicId');

    if (!news) {
      res.status(404).json({
        status: 'error',
        message: 'data not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
