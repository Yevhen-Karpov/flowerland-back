const { Achimene } = require("../../models");

const addAchimene = async (req, res, next) => {
  try {
    // const { _id } = req.user;
    const achimene = await Achimene.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: achimene,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addAchimene;
