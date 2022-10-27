const { Flower } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const flowers = await Flower.find({});
    res.json({
      status: "success",
      code: 200,
      data: {
        result: flowers,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
