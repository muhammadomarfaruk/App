import express from 'express'
const router=express.Router()
import { create, deleteUser, getAllUsers, getUserById, update } from '../controllers/userController.js';

router.post("/user",create)
router.get("/user",getAllUsers)
router.get("/user/:_id",getUserById)
router.patch("/user/:_id",update)
router.delete("/user/:_id",deleteUser)

export default router;