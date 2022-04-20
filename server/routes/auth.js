const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get("/users", AuthController.isAuthenticated, AuthController.getUsers);
router.post("/signup", AuthController.signUp);
router.post("/signin", AuthController.signIn);

module.exports = router;
