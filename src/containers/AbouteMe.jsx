import React from 'react'
import menWoringInLaptop from "../assets/menWoringInLaptop.png";

const AbouteMe = ({isDark}) => {
  return (
    <div className={`${isDark ? "bg-[#1d1c1b] text-white" : "bg-white text-black" } h-[100vh] flex  justify-center items-center`}>
      
    
        <div className='flex flex-col'>
        <h1>About me</h1>
        <p className='max-w-96'>My name is vendhan, a web developer i graduated from a.v.v.m sri pushpam collage Bachelor of computer Applications. </p>

        </div>
        <img className='w-96 h-96 ' src={menWoringInLaptop} alt='menWorking'/>
        
    </div>
  )
}

export default AbouteMe