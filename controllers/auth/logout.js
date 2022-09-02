const { User } = require("../../models");

const logout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { token: null });
    res.json({
      status: "success",
      code: 204,
      message: "No content",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = logout;
