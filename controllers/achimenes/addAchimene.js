const { Achimene } = require("../../models");

const add = async (req, res, next) => {
  try {
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

module.exports = add;
