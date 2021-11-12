const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const email = req.body.data.emailLog;
  const password = req.body.data.passwordLog;

  const user = await User.findOne({ where: { email: email } });

  if (user) {
    if (email && bcrypt.compareSync(password, user.password)) {
      console.log("user logged");
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.APP_JWT_SECRET,
      );
      res.json({ token, id: user.id });
    } else {
      res.json({ error: "Incorrect password" });
    }
  } else {
    res.json({ error: "Email doesn´t exist" });
  }
}

async function logout(req, res) {
  req.logout();
  res.redirect("/welcome");
}

module.exports = {
  login,
  logout,
};
