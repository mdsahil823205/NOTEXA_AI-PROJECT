const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                message: "tooken is not provided"
            })
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        req.userId = verifyToken.userId || verifyToken.userid || verifyToken.id;
        next();
    } catch (error) {
        console.log("this error come from isAuthenticated middleware:", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
module.exports = isAuthenticated