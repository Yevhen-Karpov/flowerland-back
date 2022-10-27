const { NotFound } = require("http-errors");

const { Geran } = require("../../models");

const getGeranById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const geran = await Geran.findById(id);
    if (!geran) {
      throw new NotFound("Geran not found");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: geran,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getGeranById;
