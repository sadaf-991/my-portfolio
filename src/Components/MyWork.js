import React, { useState } from 'react'
import certificate from '../my-image/certificate.jpeg'
import  projectDetails  from '../utils/projectsData';

const MyWork = () => {


  const [expandedCards, setExpandedCards] = useState({});

  const handleExpand = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId], // Toggle the specific card's expand state
    }));
  };


  return (
    <div>
      <hr className='ml-[3rem] mx-5 my-5 md:ml-[5rem]'/>
     
     <div className='my-5'>
     <h1 className='md:ml-[7rem] ml-[5rem] font-bold md:font-bold text-3xl py-4'>Certification</h1>
        <img alt="certificate"
       className='ml-[5rem] md:ml-[7rem] mt-3 rounded-lg border border-x-4 border-y-4 border-orange-400 md:w-[30rem]'
       src={certificate} />
     </div>

     <hr className='ml-[3rem] mx-5 my-7 md:ml-[5rem]'/>
     <h1 className='md:ml-[7rem] ml-[5rem] font-semibold md:font-bold text-3xl py-4'>Projects</h1>
     <div className='flex flex-wrap justify-between gap-6 mx-auto max-w-screen-xl'>
     {projectDetails.map((project) => {
      
      const isExpanded = expandedCards[project.id] || false; // Check if the card is expanded
     
      return (
        
       <div key={project.id} className='group md:ml-[6rem] md:mr-5 md:w-[32rem] w-auto  ml-[4rem] my-3 md:shadow-lg hover:border md:hover:border-black md:hover:bg-orange-300 hover:bg-gray-100 hover:rounded-lg hover:shadow-xl md:bg-gray-100 md:rounded-lg py-4 px-4'>
        <h1 className='font-semibold text-2xl my-3'>{project.title}</h1>
        <p className='group-hover:bg-black group-hover:text-orange-400 my-3 mt-3 md:mr-[20rem] mr-[22rem] py-2 px-3 rounded-md bg-orange-400 text-white'>{project.purpose}</p>
        <p>
          {isExpanded 
          ? project.overview 
          : `${project.overview.substring(0, 200)}...`}
          </p>

          <h6 className='font-bold w-full font-serif mt-3'
          >Key Features:-</h6>

          {isExpanded && (
            <>
         
          <h6 className='font-semibold text-gray-500 font-serif mt-3 '>
          {project.keyFeature}</h6>{project.description}
       
          <h6 className='font-semibold font-serif text-gray-500 mt-3'>
          {project.secondkeyFeature}</h6>{project.secondDescription}
          <h6 className='font-semibold font-serif text-gray-500 mt-3'>
          {project.thirdkeyFeature}</h6>{project.thirdDescription}
          <h6 className='font-bold font-serif mt-3 w-full'>
          Technical Details: </h6> 
          <h6 className='font-medium text-gray-500 mt-3'>
          {project.technicalDetails1}</h6>
          <h6 className='font-medium text-gray-500 mt-3'>
          {project.technicalDetails2}</h6>{project.tech_des}
        </>
        )} 
           <div className='flex'>
           <button  onClick={() => handleExpand(project.id)}
          className='bg-gray-700 px-3 py-3 text-white my-3 hover:bg-none rounded-lg border border-black'
          >{isExpanded ? "Collapse-" : "Expand+"}</button>


          <a href='https://github.com/dashboard'>
          <button className='px-5 py-3 mx-4 text-black my-3 hover:bg-gray-500 rounded-lg border border-black'
          >Github</button> </a>
          </div>
          </div>
         
      );
                           
})}

</div>
          
  
     
      <hr className='ml-[3rem] mx-5 md:ml-[5rem] mt-8'/>
      <h1 className='md:ml-[7rem] ml-[5rem] font-semibold md:font-bold text-3xl py-4'>Experience.</h1>
      <div className=' mb-14 md:flex my-6 mx-[3rem] md:ml-[7rem] md:w-[63rem] w-[17rem] h-auto md:h-[15rem] bg-gray-100 rounded-lg shadow-xl'>
        
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

export default MyWork;
