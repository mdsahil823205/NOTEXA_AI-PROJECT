const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const noteRouter = require("./routes/noteGenerate.route");
const PDFRouter = require("./routes/PDF.route");

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["https://notexa-ai-project-client.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", noteRouter);
app.use("/api/pdf", PDFRouter);

module.exports = app;
