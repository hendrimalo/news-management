const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const tags = await Tags.findById({ _id: id });

    if (!tags) {
      res.status(404).json({
        status: 'error',
        message: 'data Id not found',
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
