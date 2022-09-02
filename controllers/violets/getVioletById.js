const { NotFound } = require("http-errors");

const { Violet } = require("../../models");

const getVioletById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const violet = await Violet.findById(id);
    if (!violet) {
      throw new NotFound("Violet not found");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: violet,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getVioletById;
