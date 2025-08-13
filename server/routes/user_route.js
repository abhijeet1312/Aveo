import { Router } from "express";
import { SignUpUser, loginUser } from "../controllers/user_controller.js";
import { cjDropshippingController } from "../controllers/cjDropshhipingController.js";
const router = Router();
// Route for user signup
router.post("/signup", SignUpUser);
// Route for user login
router.post("/login", loginUser);

router.get("/cj-products", cjDropshippingController);
export default router;
