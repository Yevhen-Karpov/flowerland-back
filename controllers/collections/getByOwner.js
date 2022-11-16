const { Collection } = require("../../models");

const getByOwner = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const collections = await Collection.find({ owner: _id }).populate(
      "owner",
      "_id name email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: collections,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getByOwner;
