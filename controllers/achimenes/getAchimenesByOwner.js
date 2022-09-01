const { Achimene } = require("../../models");

const getAchimenesByOwner = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const achimenes = await Achimene.find({ owner: _id }).populate(
      "owner",
      "_id name email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: achimenes,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAchimenesByOwner;
