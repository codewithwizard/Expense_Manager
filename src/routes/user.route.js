import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.contoller.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

// this add posting to registerUser on user.controller.js 
// routing help to route and then it goes to controller to handle operation , here 'registration'

export default router