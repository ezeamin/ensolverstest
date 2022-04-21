const DbUser = require("../database/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  isAuthenticated(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Invalid token",
          });
        }
        req.user = decoded;

        next();
      });
    } else {
      return res.status(401).json({
        message: "No token provided",
      });
    }
  },

  async createAdmin() {
    if (
      !(await DbUser.findOne({
        where: {
          username: "admin",
        },
      }))
    ) {
      try {
        const hashedPass = bcrypt.hashSync("admin", 10);
        DbUser.create({
          username: "admin",
          password: hashedPass,
        });
      } catch (err) {}
    } else {
      console.log("Admin already exists");
    }
  },

  signUp(req, res) {
    const { username, password } = req.body;
    DbUser.create({
      username,
      password: bcrypt.hashSync(password, 10),
    })
      .then((user) => {
        const token = logIn(user);

        res.json({
          message: "User created",
          user,
          token,
        });
      })
      .catch((err) => {
        res.status(500).json({
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
        res.status(500).json({
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
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  return token;
};
