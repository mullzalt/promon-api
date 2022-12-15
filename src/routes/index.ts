import { Router } from "express";
import { register } from "../controllers/auth";
import { validateRegister } from "../middlewares/validator";

const router = Router()

router.route('/register').post(validateRegister, register)


export default router

