import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center h-20 '>
        <div className='flex gap-10 uppercase'>
            <a className='text-lg'  href="#home" style={{fontFamily:'roboto , sans-serif'}}>Home</a>
            <a className='text-lg ' href="#aboutMe" style={{fontFamily:'roboto , sans-serif'}}>About me</a>
            <a className='text-lg ' href="#projects" style={{fontFamily:'roboto , sans-serif'}}>Projects</a>
            <a className='text-lg ' href="#contact" style={{fontFamily:'roboto , sans-serif'}}>contact</a>
        </div>
    </div>
  )
}

export default Navbar;