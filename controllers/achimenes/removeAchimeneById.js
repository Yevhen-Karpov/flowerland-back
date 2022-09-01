const { NotFound } = require("http-errors");

const { Achimene } = require("../../models");

const removeAchimeneById = async (req, res) => {
  const { id } = req.params;
  const result = await Achimene.findByIdAndDelete(id);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(204).json({
    status: "success",
    code: 204,
    message: "Content deleted",
    data: {
      result,
    },
  });
};

module.exports = removeAchimeneById;
