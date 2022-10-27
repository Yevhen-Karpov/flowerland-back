const { Flower } = require("../../models");

const getGeranByOwner = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const gerans = await Flower.find({ owner: _id }).populate(
      "owner",
      "_id name email"
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        result: gerans,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getGeranByOwner;
