import { Router } from "express";
import { getTranslations } from "../controllers/translationController";

const router = Router();

router.get("/translations", getTranslations);

export default router;