import React from 'react'

const Button = ({name,type}) => {
  return (
    <button className='w-full h-[2.5rem] justify-center items-center py-2 bg-button_bg text-primary rounded-3xl my-8' type={type}>{name}</button>
  )
}

export default Button