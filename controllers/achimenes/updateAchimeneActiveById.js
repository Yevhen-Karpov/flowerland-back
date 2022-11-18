const { NotFound } = require("http-errors");

const { Achimene } = require("../../models");

const updateAchimeneActiveById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { active } = req.body;
    const achimene = await Achimene.findByIdAndUpdate(
      id,
      { active },
      {
        new: true,
      }
    );
    if (!achimene) {
      throw new NotFound("Achimene not found");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: achimene,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateAchimeneActiveById;
