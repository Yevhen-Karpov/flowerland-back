const { Geran } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const gerans = await Geran.find({});
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

module.exports = getAll;
