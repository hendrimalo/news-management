const News = require('../../models/news');
const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const {
      topicId, image, title, desc, author, tagName,
    } = req.body;

    const news = await News.create({
      topicId,
      image,
      title,
      desc,
      author,
      created_at: new Date(),
    });

    await Tags.create({
      name: tagName,
      newsId: news._id,
    });

    res.status(200).json({
      status: 'success',
      data: `${news.title} success created`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
