const express = require("express");
const AuthController = require("../controllers/AuthController");
const PostsController = require("../controllers/PostsController");
const router = express.Router();

router.get("/",AuthController.isAuthenticated,PostsController.getPosts);
router.post("/",AuthController.isAuthenticated,PostsController.newPost);

module.exports = router;