const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const tags = await Tags.find();

    if (tags.length <= 0) {
      res.status(200).json({
        status: 'success',
        message: 'data tags not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: tags,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
