import React from 'react'

const ContactCard = ({text, icon}) => {
  return (
    <div className='w-[320px] rounded-full border-2 border-white text-white px-4 py-2'>
        <div className='flex justify-between items-center'>
            <h1 className='text-[14px] font-light'>
                {text}
            </h1>
            <img src={icon} className='w-8'/>
        </div>
    </div>
  )
}

export default ContactCard