const express = require('express');
const currentUserController = require("../controller/user.controller").currentUserController;
const isAuthenticated = require("../middleware/user.middleware");
const userRouter = express.Router();
userRouter.get("/currentUser", isAuthenticated, currentUserController)
module.exports = userRouter;