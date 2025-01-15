import { Router } from "express";
import { sendVerificationCode } from "../controllers/testEmailsController";

const router = Router();

router.post("/send-verification-code", sendVerificationCode);

export default router;