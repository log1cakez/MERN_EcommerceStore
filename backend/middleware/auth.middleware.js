import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized = No access token provided" });
    }
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_S);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Access Token expired" });
      }
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Invalid access token" });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied - admin only" });
  }
};
