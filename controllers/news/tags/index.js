const redis = require('redis');
const Tags = require('../../../models/tags');

const client = redis.createClient();

module.exports = async (req, res) => {
  try {
    const { name } = req.params;
    await client.connect();

    const data = await client.get(`tag-${name}`);

    if (data) {
      res.status(200).json({
        status: 'success from redis',
        data: JSON.parse(data),
      });
      client.disconnect();
    }

    const tags = await Tags.find({ name }).populate('newsId', 'image title desc author updated_at');
    if (tags.length <= 0) {
      res.status(404).json({
        status: 'success from server',
        message: 'data tags not found',
      });
    }

    res.status(200).json({
      status: 'dari server success',
      data: tags,
    });

    await client.setEx(`tag-${name}`, 600, JSON.stringify(tags));
    await client.disconnect();
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
