const { NotFound } = require("http-errors");

const { Collection } = require("../../models");

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const flower = await Collection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!Flower) {
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
module.exports = updateById;
