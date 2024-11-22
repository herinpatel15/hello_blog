import { Router } from "express";
import { routes } from "../router";
import { login, register } from "../controller/authController";

const router = Router()

router.post(routes.login.path, login)
router.post(routes.register.path, register)

export default router