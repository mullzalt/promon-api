import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'

import User from "../../db/models/User";
import { hashPassword } from "../../utils/AuthHelper";
import UserRole from "../../db/models/UserRole";

const register = async (req: Request, res: Response, next: NextFunction) => {
    const {
        username,
        password,
        email,
        company,
        phone,
        name,
        img_url,
        profile,
        address,
    } = req.body

    const roles = req.body.roles ? req.body.roles : 4

    const hashedPass = await hashPassword(password)

    const user = await User.create({
        username,
        password: hashedPass,
        email,
        company,
        phone,
        img_url,
        name,
        profile,
        address
    })

    const user_role = await UserRole.create({
        userId: user.id,
        roleId: roles
    })

    return res.json({
        user,
        user_role
    })
}

export default register