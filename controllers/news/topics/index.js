const redis = require('redis');
const News = require('../../../models/news');

const client = redis.createClient();

module.exports = async (req, res) => {
  try {
    const { name } = req.params;
    await client.connect();

    const data = await client.get(`topic-${name}`);

    if (data) {
      res.status(200).json({
        status: 'success from redis',
        data: JSON.parse(data),
      });
      client.disconnect();
    }

    const news = await News.find({ topicId: { $ne: null } })
      .populate({
        path: 'topicId',
        match: {
          name,
        },
      });

    if (news.length <= 0 || !news) {
      res.status(404).json({
        status: 'error',
        message: `data news with topic ${name} not found`,
      });
    }

    res.status(200).json({
      data: news,
    });

    await client.setEx(`topic-${name}`, 600, JSON.stringify(news));
    await client.disconnect();
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
