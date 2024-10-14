import React from 'react';

const Button = ({text, icon}) => {
  return (
    <button className='rounded-full border-2 border-white text-white px-4 py-2 '>
      <div className='flex flex-row gap-8 items-center'>
        <span>
          {text}
        </span>
        <img src={icon} alt='' className='w-8'/>
      </div>
      
    </button>
  );
};

export default Button;