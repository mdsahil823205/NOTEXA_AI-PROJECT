const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.userId = decoded.userid;

    next();
  } catch (error) {
    console.log("Error in isAuthenticated middleware:", error);

    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAuthenticated;
