const { Collection } = require("../../models");

const add = async (req, res, next) => {
  const { _id } = req.user;
  try {
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
