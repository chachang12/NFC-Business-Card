import React from 'react'
import { upright } from '../../assets'

const ResourceCard = ({text}) => {
  return (
    <div className='w-[320px] rounded-full border-2 border-white text-white px-4 py-2'>
        <div className='flex flex-row justify-between'>
            <h1 className=''>
                {text}
            </h1>
            <img src={upright} className='w-6'/>
        </div>
        
    </div>
  )
}

export default ResourceCard