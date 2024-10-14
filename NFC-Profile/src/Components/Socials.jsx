import React from 'react'
import { LinkedIn, Calendar } from '../assets'

const Socials = () => {
  return (
    <div className='flex flex-row gap-10'>
        <div className='w-12'>
            <img src={LinkedIn} />
        </div>
        <div className='w-12'>
            <img src={Calendar} />
        </div>
        
    </div>
  )
}

export default Socials