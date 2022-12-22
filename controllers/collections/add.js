const { Collection } = require("../../models");

const add = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const newCollection = await Collection.find({ name });
    if (newCollection) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Collection already exists",
      });
    }

    const result = await Collection.create({ ...req.body, owner: _id });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
