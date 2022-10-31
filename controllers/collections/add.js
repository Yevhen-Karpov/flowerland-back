const { Collection } = require("../../models");

const add = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const collection = await Collection.create({ ...req.body, owner: _id });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: collection,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
