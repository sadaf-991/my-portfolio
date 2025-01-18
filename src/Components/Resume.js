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
    <div className='md:inline-block ml-[4rem]  md:ml-[7rem] mt-1'>
     
      <button className='hover:bg-orange-400 hover:text-black md:mb-5 md:my-0 rounded-md bg-black text-white font-bold px-7 py-5'
       onClick={()=> {handleDownload(PDF_FILE_URL)}}
       >Download CV</button>
       
    </div>
  )
}

export default Resume
