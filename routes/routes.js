import express from 'express'

//!controllers
import { createTask, getAllTasks } from '../controllers/TaskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.post('/create', createTask)

export default router
