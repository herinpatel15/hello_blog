import { Router } from "express";
import { routes } from "../router";
import { login, logout, register } from "../controller/authController";

const router = Router()

router.post(routes.login.path, login)
router.post(routes.register.path, register)
router.post(routes.logout.path, logout)

export default router