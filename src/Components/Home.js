import React from 'react'
import myImage from '../my-image/myImage.jpeg'
import Resume from './Resume'




const Home = () => {

  
  return (
    <div className=' md:ml-[15%] ml-16 my-5 font-medium'>
      <div className='flex '>
        <div>
        <div className='pb-10 md:pb-5 md:flex inline md:ml-2'>
      <p className=' my-5 md:pr-24 font-bold'>(+91)9919456147</p>
      <p className='my-5 md:ml-[20%]'>missadafansari@gmail.com</p>  
      </div>
      
      <p className=' pt-[5rem] pb-3  md:text-lg font-normal'>Hello, My name is</p>
      <h1 className='font-extrabold font-mono text-3xl md:text-7xl'>SADAF</h1>
      <div className=' font-sans text-orange-500 md:text-2xl font-bold py-3'>
      <p className='animate-animation_typing'>Web Developer</p>
      <p className=''>UI/UX Designer</p>
      </div>
      <div className=''>
      <p className='md:w-2/3 w-3/3 font-normal md:font-semibold'
      >A passionate React.js developer with 1 year of experience building dynamic, user-centric web applications. My expertise lies in crafting responsive UIs, managing state efficiently using React Hooks and Redux, and implementing RESTful APIs to deliver seamless user experiences. I thrive in collaborative environments and continuously seek to enhance my skills to develop innovative solutions.
       </p>


       
       </div>
       </div>
       <div className=''>
       <img alt="my-pic"
       className='hidden md:block rounded-full mr-3 md:w-[70rem] my-3 mt-[7rem] md:mr-[5rem]'
       src={myImage} />
       </div>
       
      </div>
      
      
      
    </div>
  )
}

export default Home