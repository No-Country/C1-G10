const User = require("../Models/User");

exports.newUser = [
  async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const user = new User({
        username,
        password,
      });

      await user.save();
      res.json(user);
    } catch (err) {
      res.json(next(err));
    }
  },
];
