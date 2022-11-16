const { NotFound } = require("http-errors");

const { Collection } = require("../../models");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (!flower) {
      throw new NotFound("Flower not found");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: collection,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
