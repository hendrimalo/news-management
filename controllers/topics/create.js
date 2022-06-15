const Topics = require('../../models/topics');
const { formatString } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;

    const topic = await Topics.create({
      name: formatString(name),
    });

    res.status(200).json({
      status: 'success',
      data: `${topic.name} success created`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
