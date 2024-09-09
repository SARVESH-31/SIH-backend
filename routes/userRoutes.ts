// routes/userRoutes.ts
import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController';

const router = express.Router();

// Create a new user
router.post('/create', createUser);

// Get all users
router.get('/', getAllUsers);

export default router;
