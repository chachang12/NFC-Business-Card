// src/Components/Headshot.jsx
import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';
import qr from '../assets/qr.png'; // Ensure the correct path to the QR code image

const Headshot = () => {
  const [isFlipped, setIsFlipped] = useState(false);
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-[200px] h-[200px] perspective' onClick={handleFlip}>
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          <div className='absolute inset-0 w-full h-full backface-hidden'>
            <img
              src={employee.profilePicture}
              alt="Headshot"
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
          <div className='absolute inset-0 w-full h-full backface-hidden rotate-y-180'>
            <img
              src={qr}
              alt="QR Code"
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headshot;