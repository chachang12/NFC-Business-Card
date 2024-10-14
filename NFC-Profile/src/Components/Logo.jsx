import React from 'react'
import LogoIcon from './Icons/LogoIcon.jsx'

const Logo = () => {
  return (
    <div className='flex flex-col items-center'>
        <LogoIcon width="150" height="150" color="FFFFFF" />
        {/* <span className='text-[25px] text-white'>
            Scheer Partners
        </span> */}
    </div>
  )
}

export default Logo