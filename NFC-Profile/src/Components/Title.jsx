// src/Components/Title.jsx
import React, { useContext } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';

const Title = () => {
  const { employee, loading, error } = useContext(EmployeeContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!employee) {
    return <div>No employee data available</div>;
  }

  return (
    <div className='text-white flex flex-col items-center'>
      <h1 className='text-4xl'>{employee.name}</h1>
      <h2>{employee.position}</h2>
    </div>
  );
};

export default Title;