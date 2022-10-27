const { NotFound } = require("http-errors");

const { Geran } = require("../../models");

const removeGeranById = async (req, res) => {
  const { id } = req.params;
  const result = await Geran.findByIdAndDelete(id);
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

module.exports = removeGeranById;
