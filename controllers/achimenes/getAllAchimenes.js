const { Achimene } = require("../../models");

const getAllAchimenes = async (req, res, next) => {
  try {
    const achimenes = await Achimene.find({});
    res.json({
      status: "success",
      code: 200,
      data: {
        result: achimenes,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllAchimenes;
