// src/Context/EmployeeContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../Services/apiService';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        try {
          const data = await getEmployeeById(id);
          setEmployee(data);
          
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <EmployeeContext.Provider value={{ employee, loading, error }}>
      {children}
    </EmployeeContext.Provider>
  );
};