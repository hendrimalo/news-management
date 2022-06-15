const redis = require('redis');
const News = require('../../models/news');

const client = redis.createClient();

module.exports = async (req, res) => {
  try {
    const { status } = req.query;
    await client.connect();

    const data = await client.get('news');

    if (data) {
      res.status(200).json({
        status: 'success from redis',
        data: JSON.parse(data),
      });
    }

    if (status === undefined || status === '') {
      const news = await News.find();

      if (news.length <= 0) {
        res.status(200).json({
          status: 'success',
          message: 'data news not found',
        });
      }

      res.status(200).json({
        data: news,
      });

      await client.setEx('name', 600, JSON.stringify(news));
      await client.disconnect();
    }
    const news = await News.find({ status });

    if (news.length <= 0) {
      res.status(200).json({
        status: 'success',
        message: `data news with  query ${status} not found`,
      });
    }

    res.status(200).json({
      data: news,
    });
    client.disconnect();
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
