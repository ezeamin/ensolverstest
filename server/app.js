require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const sequelize = require("./database/db");

// Require routes
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");

// Settings & middlewares
app.set("port", process.env.PORT || 5000);
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

// Server start
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));

  sequelize
    .sync({ force: false }) // force: true -> drop tables
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
});
