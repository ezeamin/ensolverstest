const DbUser = require("../database/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signUp(req, res) {
    const { username, password } = req.body;
    DbUser.create({
      username,
      password: bcrypt.hashSync(password, 10),
    })
      .then((user) => {
        res.json({
          message: "User created",
          user,
        });
      })
      .catch((err) => {
        res.json({
          message: "Error creating user",
          err,
        });
      });
  },

  signIn(req, res) {
    const { username, password } = req.body;
    DbUser.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {

            const token = logIn(user);

            res.json({
              message: "User logged in",
              user,
              token,
            });
          } else {
            res.status(401).json({
              message: "Wrong password",
            });
          }
        } else {
          res.status(403).json({
            message: "User not found",
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Error logging in user",
          err,
        });
      });
  },

  getUsers(req, res) {
    DbUser.findAll()
      .then((users) => {
        res.json({
          users,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error finding users",
          err,
        });
      });
  },
};

const logIn = (user) => {
  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
  return token;
}