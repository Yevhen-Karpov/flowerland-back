const { Flower } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const result = await Flower.find({});
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
