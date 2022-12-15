import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import User from "../db/models/User";

const checkErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = errors.mapped()
        return res.status(422)
            .json({
                message: 'invalid request values',
                error
            })
    }

    return next()
}


export const validateRegister = [
    check('username')
        .notEmpty()
        .withMessage('username cannot be empty!')
        .matches(/^[a-zA-Z0-9_]*$/g)
        .withMessage('username cannot contain space or special characters!')
        .custom(async value => {
            const user = await User.findOne({
                where: { username: value }
            })

            if (user) {
                return Promise.reject('username already taken!')
            }
        }),

    check('password')
        .notEmpty()
        .withMessage('password cannot be empty!')
        .isLength({ min: 8 })
        .withMessage('password must be atleast 8 character long!'),

    check('name')
        .notEmpty()
        .withMessage('name cannot be empty!'),

    check('phone')
        .notEmpty()
        .withMessage('mobile number cannot be empty!')
        .isMobilePhone('id-ID')
        .withMessage('please enter a valid indonesian mobile number!'),

    check('email')
        .notEmpty()
        .withMessage('email cannot be empty!')
        .isEmail()
        .withMessage('please enter a valid email!')
        .custom(async value => {
            const user = await User.findOne({
                where: { email: value }
            })

            if (user) {
                return Promise.reject('email already used!')
            }
        }),

    checkErrors
]