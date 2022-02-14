import express from 'express'
const router = express.Router();

import { aboutController } from '../controllers/aboutController.js';
import { homeController } from '../controllers/homeController.js';
router.get('/about',aboutController)
router.get('/',homeController)

export default router