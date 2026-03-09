const express = require('express');
const authRouter = express.Router();
const authController = require("../controller/auth.controller");
authRouter.post("/google", authController.googleAuth)
authRouter.get("/logout", authController.logout)
module.exports = authRouter;