import React from 'react'
import Button from './Buttons/Button'
import { adduser, transfer } from '../assets'

const Actions = () => {
  return (
    <div className='flex flex-row gap-5'>
        <Button text={'Save'} icon={adduser}/>
        <Button text={'Exchange'} icon={transfer}/>
    </div>
  )
}

export default Actions