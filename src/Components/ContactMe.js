import React from 'react'

const ContactMe = () => {
  return (
    <div className=''>
       <div className='md:ml-[7rem] ml-[2.5rem]'>
      <h1 className=' font-bold text-2xl my-5 ml-[3rem]'>Contact Info.</h1>
     
      <div className='flex'>
      <img className='md:w-12 md:h-12 w-7 h-7 my-8 md:my-5 mr-2 md:mr-4'
      alt='location-icon'
      src='https://www.pngkey.com/png/detail/12-129860_map-location-svg-png-icon-free-download-location.png'/>
      <p className='md:w-1/3 md:mt-7 mt-5 md:font-semibold ml-4'>Jain Road, Gali No.3, Neev Apartment, Mohan Garden, 110059, New Delhi</p>
      </div>
      <div className='flex'>
      <img className='md:w-16 w-8 my-5 mr-5'
      alt='call-icon'
      src='https://icon-library.com/images/phone-call-icon-png/phone-call-icon-png-0.jpg'/>
      <p className='md:mt-7 mt-5 md:font-semibold ml-3'>+91 9919456147</p>
      </div>
      <div className='flex'>
      <img className='md:w-20 w-10 my-3 mr-5 '
      alt='email-icon'
      src='https://static.vecteezy.com/system/resources/previews/000/554/945/original/envelope-icon-vector-illustration.jpg'/>
      <p className='md:mt-9 mt-5 md:font-semibold ml-2'>missadafansari@gmail.com</p>
      </div>

      </div>
      
      
    </div>
  )
}

export default ContactMe
