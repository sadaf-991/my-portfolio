import React from 'react';
import myImage from '../my-image/myImage.jpeg';

const Biography = () => {

  

  return (
    
    <div className="container mt-10 px-5 py-0">
      <hr className='md:ml-[5rem] ml-[3rem] my-7 md:mt-5'/>
      <div className="md:flex mx-3 md:justify-between">
          <div className='flex'>
            <div className='md:w-[30rem] md:ml-[20%] md:px-2 '>
            <img className='hidden md:block w-[30rem] ml-[2%] rounded-full' 
            alt='my-image'
            src={myImage}/>
             <div className='flex md:mx-9 justify-between'>
            <a href='https://www.instagram.com/lawyer_sadaf/' >
          <img
            alt="insta-logo"
            className=" md:mt-5 my-5 ml-[1rem] md:ml-[5%] md:w-[6rem] md:h-[4.5rem] w-[12rem] h-[4rem] p-0"
            src="https://icon-library.com/images/instagram-circle-icon-png/instagram-circle-icon-png-24.jpg"
          />
         </a>
         <a href='https://www.linkedin.com/in/sadaf-a-11a8781b3/'>
           <img
            alt="linkdin-logo"
            className="md:ml-[9%] md:mt-7 mt-6 ml-4 md:my-2 md:w-[4rem] w-[7rem] h-[3.5rem] md:h-[3.7rem] p-0"
            src="https://i0.wp.com/beautystreamslifestyle.com/wp-content/uploads/2020/04/crop-0-0-1600-1600-0-linkedin-icon-png-1600.png?resize=1536%2C1536&ssl=1"
          />
          </a>
          <a href='https://github.com/dashboard'>
          <img
            alt="git-logo"
            className="md:ml-[3%]  md:mt-5 my-5 md:mr-0 ml-3  w-[15rem] h-[4rem] md:w-[7.5rem] md:h-[4rem] p-0"
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
          />
          </a> 
          </div>
          </div>
         </div>
        

        
        <div className="md:ml-[10%]  ml-[10%] w-full">
          <h1 className=" font-bold text-2xl md:text-5xl  md:text-center">Biography</h1>
          
          <p className="md:my-7 my-3 font-normal md:font-semibold">
          My journey as a developer has led me to work on various projects, including meme generators, CRUD applications, Youtube-like clones and Swiggy-like clones, each of which has honed my problem-solving skills and deepened my understanding of component-based architecture. I enjoy collaborating within teams, leveraging Agile methodologies, and maintaining clean, scalable codebases using best practices in Git version control.
          </p>
          
       
          <ul className="grid md:grid-cols-2 md:grid-row-2 md:my-0 py-3">
            <li className="font-semibold md:my-0 my-3">Name: <span className="font-normal">Sadaf</span></li>
            <li className="font-semibold">Birthday: <span className="font-normal">12th June 1999</span></li>
            <li className="font-semibold md:my-0 my-3">Phone: <span className="font-normal">+91 9919456147</span></li>
            <li className="font-semibold ">Address: <span className="font-normal">New Delhi</span></li>
            <li className="flex font-semibold md:my-0 my-3">Email: <span className="ml-1 font-normal">missadafansari@gmail.com</span></li>
          </ul>
        </div>
      </div>

      <hr className="my-10 ml-[2rem] md:ml-[5rem]" />
      
      <h4 className="md:ml-[7rem] ml-[3.5rem] font-semibold md:font-bold text-3xl py-7">What I Do?</h4>
      <div className='md:flex md:ml-[7rem] mx-[2rem] '>
      <div className='bg-gray-100  mr-7 hover:text-black hover:bg-orange-400 md:w-[30rem] w-[17rem] mb-16 md:h-[23rem] h-auto shadow-xl rounded-lg p-6'>
          <h1 className="font-bold px-5 py-5 text-xl md:text-2xl text-black pr-1 ">Web Design</h1>
          <p className=''>
          Crafting visually appealing and user-friendly interfaces for web applications
Designing and implementing responsive layouts to ensure smooth user experiences across devices
Creating custom reusable components using CSS-in-JS and styled-components for scalability.
          </p>
        </div>

       
        <div className="bg-gray-100 hover:text-black hover:bg-orange-400  mr-5 md:w-[30rem] w-[17rem] mb-16 md:h-auto h-auto shadow-xl rounded-lg p-6">
          <h1 className="font-bold rounded-lg px-5 text-xl md:text-2xl py-6">Web Development</h1>
          <p>
          I am a dedicated React.js developer building dynamic and responsive web applications. 
          I excel in building modular and reusable components, 
          optimizing performance, and maintaining code quality.
          My portfolio includes projects such as a Swiggy Clone, 
          and CRUD-based systems showcasing real-world problem-solving abilities 
          and a strong understanding of front-end technologies.  
           </p>
        </div>
        </div>
      <hr className='ml-[2rem] md:ml-[5rem]'/>
      
       
        
        <h1 className='md:ml-[7rem] ml-[3rem] font-bold text-2xl md:text-3xl py-4 md:w-1/2'>Education & Skills</h1>
       <div className='md:flex mb-10 '>
      <div className='pb-5 mb-14 hover:bg-orange-400 my-6 md:ml-[7rem] mx-[2rem] w-[17rem] md:w-[25rem] h-auto md:h-[20rem] bg-gray-100 rounded-lg shadow-xl'>
        <p className='pt-5 px-5 text-gray-500 w-1/2 font-semibold'>2021-2024</p>
        <p className='py-1 px-5 font-semibold'>Bachelor of Law</p>
        <p className='md:inline py-1 px-5 text-gray-500 w-1/2 font-semibold'>Chaudhary Charan Singh University, Meerut.</p>
      
        <p className='pt-12 px-5 text-gray-500 w-1/2 font-semibold'>2017-2020</p>
        <p className='py-1 px-5 font-semibold'>Bachelor of Arts</p>
        <p className='md:inline py-1 px-5 text-gray-500 w-1/2 font-semibold'>Prof. Rajendra Singh University, Prayagraj.
        </p>
      </div>
        <div className="space-y-4 p-5 md:w-1/3 md:ml-20 ml-[2rem]">
 
  <div className='my-5'>
    <p className="md:font-bold font-semibold text-lg">HTML</p>
    <div className="bg-gray-300 h-1 rounded-lg overflow-hidden">
      <div className="bg-orange-400 h-full animate-progress w-[80%]"></div>
    </div>
  </div>

  
  <div className='my-5'>
    <p className="md:font-bold font-semibold text-lg">CSS</p>
    <div className="bg-gray-300 h-1 rounded-lg overflow-hidden">
      <div className="bg-orange-400 h-full animate-progress w-[70%]"></div>
    </div>

    <div className='my-5'>
    <p className="md:font-bold font-semibold text-lg">React.js</p>
    <div className="bg-gray-300 h-1 rounded-lg overflow-hidden">
      <div className="bg-orange-400 h-full animate-progress w-[90%]"></div>
    </div>

    <div className='my-5'>
    <p className="md:font-bold font-semibold text-lg">JavaScript</p>
    <div className="bg-gray-300 h-1 rounded-lg overflow-hidden">
      <div className="bg-orange-400 h-full animate-progress w-[80%]"></div>
    </div>

    <div className='my-5'>
    <p className="md:font-bold font-semibold text-lg">Git</p>
    <div className="bg-gray-300 h-1 rounded-lg overflow-hidden">
      <div className="bg-orange-400 h-full animate-progress w-[70%]"></div>
    </div>

    
</div>
    </div>
</div>

</div>
</div>
 <hr className='ml-[2rem]'/>
 </div>
 </div> 
  );
};

export default Biography;
