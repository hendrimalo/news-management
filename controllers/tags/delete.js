const Tags = require('../../models/tags');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const tags = await Tags.findByIdAndRemove({ _id: id });

    res.status(200).json({
      status: 'success',
      message: `${tags.name} success deleted`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
