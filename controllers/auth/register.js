const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Email in use",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          name,
          email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
