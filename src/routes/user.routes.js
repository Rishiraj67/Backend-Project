import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router()

router.route("/register").post(registerUser)

router.get("/test", (req, res) => {
    res.send("Working bro 🚀")
})

export default router