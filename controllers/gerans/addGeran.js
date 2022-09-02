const { Geran } = require("../../models");

const add = async (req, res, next) => {
  try {
    const geran = await Geran.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: geran,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
