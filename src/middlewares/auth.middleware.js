import jwt from "jsonwebtoken";
import handleApiError from "../utils/handleApiError.js";

export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new handleApiError(401, "Access token missing");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        throw new handleApiError(401, "Invalid or expired access token");
    }
};
