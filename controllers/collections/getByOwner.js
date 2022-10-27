const { Flower } = require("../../models");

const getByOwner = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const flowers = await Flower.find({ owner: _id }).populate(
      "owner",
      "_id name email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: flowers,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getByOwner;
