const express = require("express");
const PDFController = require("../controller/pdf.controller");

const PDFRouter = express.Router();
PDFRouter.post("/generate-pdf", PDFController);
module.exports = PDFRouter
