require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Require routes
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");
const establishConnection = require("./database/connection");

// Settings & middlewares
app.set("port", process.env.PORT || 5000);
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ensolverstest.netlify.app"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

// Server start
const server = app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));

  // Database connection
  establishConnection(server);
});
