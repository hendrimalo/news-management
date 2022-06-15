const News = require('../../models/news');
const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    await Tags.findByIdAndDelete({ news_id: id });

    const news = await News.findByIdAndDelete({ _id: id });

    if (!news) {
      res.status(404).json({
        status: 'error',
        message: `data news ${id} not found`,
      });
    }

    res.status(200).json({
      status: 'success',
      message: `${news.title} success deleted`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
