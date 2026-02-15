import { Router } from "express";
import { registerUser } from "../controllers/user.contoller.js";

const router = Router();

router.route("/register").post(registerUser)

// this add posting to registerUser on user.controller.js 
// routing help to route and then it goes to controller to handle operation , here 'registration'

export default router