import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function assessButton(props) {
  return (
    <div className='assessButton'>
        {props.name}
        <AiOutlineArrowRight size={20}/>
    </div>
  )
}

export default assessButton