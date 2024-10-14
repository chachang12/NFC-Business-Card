import React, { useContext } from 'react';
import ContactCard from './Buttons/ContactCard.jsx';
import { email, telephone, pin, company, globe } from '../assets';
import { EmployeeContext } from '../Context/EmployeeContext.jsx';

const ContactInfo = () => {
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
    <div className='flex flex-col gap-4'>
      <ContactCard text={employee.company} icon={company} />
      <ContactCard text={employee.email} icon={email} />
      <ContactCard text={employee.phoneNumber} icon={telephone} />
      <ContactCard text={employee.address} icon={pin} />
      <ContactCard text={'https://scheerpartners.com/'} icon={globe} />
    </div>
  );
};

export default ContactInfo;