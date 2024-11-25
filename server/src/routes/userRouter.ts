import { Router } from "express";
import { routes } from "../router";
import { profileData } from "../controller/userController";

const router = Router()

router.get(routes.profile.path, profileData)

export default router