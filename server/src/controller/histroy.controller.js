const notesModel = require("../models/notes.model");
const histroryController = async (req, res) => {
    try {
        const getUserNotes = await notesModel.find({ user: req.userId }).select(
            "topic classLevel examType revisionMode createdAt",
        ).sort({ createdAt: -1 });

        if (getUserNotes.length === 0) {
            return res.status(404).json({
                status: true,
                message: "no notes found"
            })
        }
        return res.status(200).json({
            status: true,
            messsage: "user Notes Data Fetch sucessfully",
            getUserNotes
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `getmynotes controller error ${error}`,
        });
    }
};

module.exports = histroryController
