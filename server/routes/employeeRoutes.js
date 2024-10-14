import express from 'express';
import { getEmployeeById, addEmployee } from '../controllers/employeeController.js'; // Import the controller function

const router = express.Router();

// GET employee details by ID
router.get('/employee/:id', getEmployeeById);

router.post('/employee', addEmployee);

// Optionally, other CRUD routes can be defined here

export default router;