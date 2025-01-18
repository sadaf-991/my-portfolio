import React from 'react'

const MyWork = () => {
  return (
    <div>
     
      <h1 className='md:ml-[7rem] ml-[6rem] font-semibold md:font-bold text-3xl py-4'>Experience.</h1>
      <div className=' mb-14 md:flex my-6 ml-[2.5rem] md:ml-[7rem] md:w-[63rem] w-[17rem] h-[23rem] md:h-[15rem] bg-gray-100 rounded-lg shadow-xl'>
        
        <div className='md:items-left'>
          <p className='md:my-5 mt-3 pt-4 mx-4 font-serif'>Intern At DoToq Dgtal</p>
          <p className='mx-4 text-gray-500 italic'>15th March to 15th September</p>
          <p className='hover:bg-black hover:text-orange-400  mt-3 mx-4 py-2 px-5 w-[6rem] rounded-md bg-orange-400 text-white'>PartTime</p>
        </div>

        <div className='md:border-l-2 md:border-t-0 border-t-2 border-gray-300 py-3 mt-4 md:mt-7 h-auto md:h-[80%] md:mx-20 '>
          <p className='mx-3'>Developed and maintained responsive web applications using React.js, Redux, and JavaScript.
Collaborated with cross-functional teams to design UI components and implement interactive user experiences.
Optimized application performance by identifying and resolving performance bottlenecks.
</p>
        </div>
      </div>
        <hr className='ml-[3rem] mx-5 md:ml-[5rem]'/>
    </div>
  )
}

export default MyWork
