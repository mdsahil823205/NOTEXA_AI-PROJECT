const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.route")
const userRouter = require("./routes/user.route")
const express = require("express")
const cors = require("cors")
const noteRouter = require("./routes/noteGenerate.route")
const PDFRouter = require("./routes/PDF.route")

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/notes", noteRouter)
app.use("/api/pdf", PDFRouter)
module.exports = app