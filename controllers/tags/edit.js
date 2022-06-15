const Tags = require('../../models/tags');
const { formatString } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, newsId } = req.body;

    const tags = await Tags.findByIdAndUpdate({ _id: id }, {
      name: formatString(name),
      newsId,
    });

    res.status(200).json({
      status: 'success',
      message: `${tags.name} success updated`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `${error.message}`,
    });
  }
};
