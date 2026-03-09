const UserModel = require("../models/user.model");

const currentUserController = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await UserModel.findById(userId)
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "User found",
            user
        })
    } catch (error) {
        console.error("this error come from currentUserController:", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
module.exports = {currentUserController}