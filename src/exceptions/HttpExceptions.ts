import { ErrorRequestHandler } from "express";

class HttpException {
    errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500

        const stack = process.env.NODE_ENV === 'development' ? err.stack : undefined
        const message = err.message || 'Something went wrong!'

        return res.status(statusCode)
            .json({
                message,
                stack
            })
    }
}

export default new HttpException().errorHandler
