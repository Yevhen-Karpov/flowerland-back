const { Violet } = require("../../models");

const add = async (req, res, next) => {
  try {
    const violet = await Violet.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: violet,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
