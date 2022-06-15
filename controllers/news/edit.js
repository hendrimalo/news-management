const News = require('../../models/news');
const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      topicId, image, title, desc, author, status, tagName,
    } = req.body;

    const news = await News.findByIdAndUpdate({ _id: id }, {
      topicId,
      image,
      title,
      desc,
      author,
      status,
      updated_at: new Date(),
    });

    await Tags.findByIdAndUpdate({ news_id: id }, {
      name: tagName,
      newsId: news._id,
    });

    if (!news) {
      res.status(404).json({
        status: 'error',
        message: `data news ${id} not found`,
      });
    }

    res.status(200).json({
      status: 'success',
      message: `${news.title} success updated`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
