import { Router } from "express";
import { getTranslations } from "../controllers/translationController";

const router = Router();

router.get("/", getTranslations);

export default router;