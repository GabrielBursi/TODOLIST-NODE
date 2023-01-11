import express from 'express'

//!controllers
import { createTask, deleteOne, getAllTasks, getById, updateOne } from '../controllers/TaskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.post('/create', createTask)
router.get('/getById/:id/:method', getById)
router.post('/update/:id', updateOne)
router.get('/delete/:id', deleteOne)

export default router
