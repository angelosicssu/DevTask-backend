import { AppError } from "../errors/AppError.js";
export const errorHandler = (error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        });
    }
    return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error"
    });
};
