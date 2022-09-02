const { Violet } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const violets = await Violet.find({});
    res.json({
      status: "success",
      code: 200,
      data: {
        result: violets,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
