import express from 'express'

//!controllers
import { index } from '../controllers/TaskController.js'

const router = express.Router()

router.get('/', index)

export default router
