const express = require("express");
const AuthController = require("../controllers/AuthController");
const PostsController = require("../controllers/PostsController");
const router = express.Router();

router.get("/",AuthController.isAuthenticated,PostsController.getPosts);
router.post("/",AuthController.isAuthenticated,PostsController.newPost);
router.get("/:id",AuthController.isAuthenticated,PostsController.getPost);
router.put("/:id",AuthController.isAuthenticated,PostsController.putPost);
router.delete("/:id",AuthController.isAuthenticated,PostsController.deletePost);


module.exports = router;