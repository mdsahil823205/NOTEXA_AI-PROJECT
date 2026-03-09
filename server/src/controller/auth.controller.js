const userModel = require("../models/user.model");
const { getToken } = require("../utils/token");

const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }

        let user = await userModel.findOne({ email });

        if (!user) {
            user = await userModel.create({
                name,
                email,
            });
        }

        const token = getToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            message: "Login successful",
            user,
        });
    } catch (error) {
        console.error("this error come from googleAuth controller:", error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false, // true in production
            sameSite: "lax",
        });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("this error come from logout controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { googleAuth, logout };
