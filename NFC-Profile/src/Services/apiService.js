// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getEmployeeById = async (id) => {
  try {
    console.log('Fetching employee:', id);
    const response = await axios.get(`${API_URL}/employee/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employee:', error);
    throw error;
  }
};