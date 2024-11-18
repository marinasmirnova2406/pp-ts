import { Router } from "express";
import { getCountryNamesByGroup } from "../controllers/regionControllers";

const router = Router();

router.get("/country-names-by-group/:group", getCountryNamesByGroup);

export default router;