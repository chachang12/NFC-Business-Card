// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import connectDB from './config/db.js';

dotenv.config(); // Ensure this is called before accessing process.env

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', employeeRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
  });
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});