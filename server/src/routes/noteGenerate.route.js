const express = require("express");
const isAuthenticated = require("../middleware/user.middleware");
const noteGenerateController = require("../controller/noteGenerate.controller");
const histroryController = require("../controller/histroy.controller");

const noteRouter = express.Router();
noteRouter.post("/generate-notes", isAuthenticated, noteGenerateController);

noteRouter.get("/notes-history", isAuthenticated, histroryController)
module.exports = noteRouter;
    