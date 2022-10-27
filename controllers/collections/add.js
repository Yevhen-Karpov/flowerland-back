const { Flower } = require("../../models");

const add = async (req, res, next) => {
  try {
    const flower = await Flower.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: flower,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
