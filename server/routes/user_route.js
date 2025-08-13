import { Router } from "express";
import { SignUpUser, loginUser } from "../controllers/user_controller.js";
const router = Router();
// Route for user signup
router.post("/signup", SignUpUser);
// Route for user login
router.post("/login", loginUser);
export default router;
