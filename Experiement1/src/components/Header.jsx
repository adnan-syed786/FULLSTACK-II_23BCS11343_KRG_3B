import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h1 className='p-5 bg-teal-600 text-center text-white font-bold text-2xl'>{title}</h1>
    </div>
  )
}

export default Header
