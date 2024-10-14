// src/Components/Resources.jsx
import React, { useContext } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';
import ResourceCard from './Buttons/ResourceCard';

const Resources = () => {
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

  // Split the comma-separated string into an array
  const resources = employee.resources.split(',').map(resource => resource.trim());

  return (
    <div className='space-y-4'>
      {resources.map((resource, index) => (
        <ResourceCard key={index} text={resource} />
      ))}
    </div>
  );
};

export default Resources;