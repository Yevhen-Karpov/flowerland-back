const { NotFound } = require("http-errors");

const { Flower } = require("../../models");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const flower = await Flower.findById(id);
    if (!flower) {
      throw new NotFound("Flower not found");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: flower,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
