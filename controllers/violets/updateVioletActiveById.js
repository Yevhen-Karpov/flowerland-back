const { NotFound } = require("http-errors");

const { Violet } = require("../../models");

const updateVioletActiveById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { active } = req.body;
    const violet = await Violet.findByIdAndUpdate(
      id,
      { active },
      {
        new: true,
      }
    );
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
module.exports = updateVioletActiveById;
