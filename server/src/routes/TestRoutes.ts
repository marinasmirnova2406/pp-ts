import { Router } from 'express';
import { getTests, createTest } from '../controllers/TestController';

const router = Router();

router.get('/', getTests);

router.post('/', createTest);

export default router;