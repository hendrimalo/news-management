const Topics = require('../../models/topics');
const { formatString } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const topics = await Topics.findByIdAndUpdate({ _id: id }, {
      name: formatString(name),
    });

    res.status(200).json({
      status: 'success',
      message: `${topics.name} success updated`,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
