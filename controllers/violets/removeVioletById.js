const { NotFound } = require("http-errors");

const { Violet } = require("../../models");

const removeVioletById = async (req, res) => {
  const { id } = req.params;
  const result = await Violet.findByIdAndDelete(id);
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

module.exports = removeVioletById;
