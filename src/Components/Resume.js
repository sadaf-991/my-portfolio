import React from 'react'

const PDF_FILE_URL = '/SadafFrontEnd.CV.pdf'

const Resume = () => {

    const handleDownload = async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to download file');
          }
      
          const blob = await response.blob();
          const fileURL = window.URL.createObjectURL(blob);
          const aTag = document.createElement('a');
          aTag.href = fileURL;
          aTag.setAttribute('download', 'SadafFrontEnd.CV.pdf'); // Set custom filename
          document.body.appendChild(aTag);
          aTag.click();
          document.body.removeChild(aTag);
        } catch (error) {
          console.error('Download error:', error);
        }
      };
      
    

  return (
    <div>
     
      <button className='hover:bg-orange-400 hover:text-black md:ml-[15%] mb-5 ml-[4rem] rounded-md bg-black text-white font-bold px-7 py-5'
       onClick={()=> {handleDownload(PDF_FILE_URL)}}
       >Download CV</button>
       <hr className='ml-14 md:ml-[5rem]'/>
    </div>
  )
}

export default Resume
