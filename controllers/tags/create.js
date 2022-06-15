const Tags = require('../../models/tags');
const { formatString } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { name, newsId } = req.body;

    const tags = await Tags.create({
      name: formatString(name),
      newsId,
    });

    res.status(200).json({
      status: 'success',
      data: `${tags.name} success created`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
