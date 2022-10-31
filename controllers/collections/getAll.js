const { Collection } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await Collection.find({ owner: _id });
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
