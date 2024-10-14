// src/App.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeProvider } from './Context/EmployeeContext';
import { Logo, Headshot, Title, Actions, ContactInfo, Socials, Resources } from './Components';

function App() {
  const { id } = useParams();

  return (
    <EmployeeProvider>
      <div className='flex flex-col gap-4 items-center'>
        <section className='flex justify-center mb-[-20px]'>
          <Logo />
        </section>
        <section className='flex justify-center mb-2'>
          <Headshot />
        </section>
        <section className='flex justify-center'>
          <Title />
        </section>
        <section className='flex justify-center'>
          <Actions />
        </section>
        <div className='w-[90%] flex flex-col gap-4 backdrop-blur-md px-2 py-4 rounded-2xl bg-white/5'>
          <section className='flex justify-center'>
            <ContactInfo />
          </section>
          <section className='flex justify-center'>
            <Resources />
          </section>
        </div>
        <section className='flex justify-center mb-8'>
          <Socials />
        </section>
      </div>
    </EmployeeProvider>
  );
}

export default App;