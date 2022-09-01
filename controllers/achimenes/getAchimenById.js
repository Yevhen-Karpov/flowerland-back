const { NotFound } = require("http-errors");

const { Achimene } = require("../../models");

const getAchimenById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const achimene = await Achimene.findById(id);
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

module.exports = getAchimenById;
