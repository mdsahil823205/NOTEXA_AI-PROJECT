const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
        topic: {
            type: String,
            required: true,
            trim: true
        },
        classLevel: String,
        examType: String,
        revisionMode: {
            type: Boolean,
            default: false,
        },
        content: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("NoteModel", noteSchema);