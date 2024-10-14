// server/controllers/employeeController.js
import Employee from '../models/Employee.js';

// Function to get employee details by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id); // Assuming _id is used
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to add a new employee
export const addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding employee', error: error.message });
  }
};

// Optionally, other CRUD functions can be defined here