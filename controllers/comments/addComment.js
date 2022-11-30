const { Comment } = require("../../models");

const add = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: comment,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
