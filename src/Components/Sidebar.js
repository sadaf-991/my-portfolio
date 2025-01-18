import { useState } from "react"


const Sidebar = ({ onScroll, refs = {} }) => {
  console.log("Refs:", refs)
  const [selectedImage, setSelectedImage] = useState('home');

  const handleImageClick = (sectionName, ref) => {
    setSelectedImage(sectionName);
    onScroll(ref);
  };

 
  return (
    <div className="fixed top-0 left-0 h-screen border border-r-gray-200">
      <p className=' md:w-20 w-[3.5rem] text-center px-3 py-2 md:py-2 bg-orange-400 font-bold text-5xl text-white '
      >S</p>
       <img alt='home'
       onClick={()=> handleImageClick('home', refs.homeRef)}
       className={`md:w-10 w-[1.5rem] mt-14 md:mt-10 mx-3 pb-3 ${ selectedImage === 'home' ? "border-b-2 border-orange-400" : "border-b-2 hover:border-orange-500"}`}
       src='https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg'/>
       
       <img alt='bio'
       onClick={()=> handleImageClick('bio', refs.bioRef)}
       className={`md:w-10 w-[1.5rem] mt-8 md:mt-10 mx-3 pb-3 ${ selectedImage === 'bio' ? "border-b-2 border-orange-400" : "border-b-2 hover:border-orange-500"}`}
       src='https://www.freeiconspng.com/thumbs/contact-icon-png/contacts-icon--26.png'/>
       
       <img alt='resume'
      onClick={()=> handleImageClick('resume', refs.resumeRef)}
       className={`md:w-10 w-[1.5rem] mt-10 md:mt-10 mx-3 pb-3 ${ selectedImage === 'resume' ? "border-b-2 border-orange-400" : "border-b-2 hover:border-orange-500"}`}
       src='https://tse2.mm.bing.net/th?id=OIP.KH6Leq5GOB1SIvnwTsP0oAAAAA&pid=Api&P=0&h=180'/>
       
       <img alt='work'
       onClick={()=> handleImageClick('work', refs.workRef)}
       className={`md:w-10 w-[1.5rem] mt-10 md:mt-10 mx-3 pb-3 ${ selectedImage === 'work' ? "border-b-2 border-orange-400" : "border-b-2 hover:border-orange-500"}`}
       src='https://www.kindpng.com/picc/m/705-7055279_work-work-icon-png-transparent-png-download.png'/>

       <img alt='contact'
       onClick={()=> handleImageClick('contact', refs.contactRef)}
       className={`md:w-10 w-[1.5rem] mt-10 md:mt-10 mx-3 pb-3 ${ selectedImage === 'contact' ? "border-b-2 border-orange-400" : "border-b-2 hover:border-orange-500"}`}
       src='https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png'/>
       
    </div>
  )
}

export default Sidebar
