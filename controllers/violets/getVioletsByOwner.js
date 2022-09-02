const { Violet } = require("../../models");

const getVioletsByOwner = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const violets = await Violet.find({ owner: _id }).populate(
      "owner",
      "_id name email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: violets,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getVioletsByOwner;
