const { Comment } = require("../../models");

const getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.find().sort(-1);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: comments,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllComments;
