import Home from './Components/Home';
import './App.css';
import Sidebar from './Components/Sidebar';
import Biography from './Components/Biography';
import ContactMe from './Components/ContactMe';
import { useRef } from 'react';
import MyWork from './Components/MyWork';
import Resume from './Components/Resume';




function App() {

  const homeRef = useRef(null);
  const bioRef = useRef(null);
  
  const workRef = useRef(null);
  const contactRef = useRef(null);
  

  // Scroll to the section when called
  const handleScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    
    <div className="flex ">
      <Sidebar onScroll={handleScrollToRef}
      refs={{ homeRef, bioRef, workRef, contactRef }}
      />

      <div className='overflow-y-scroll ml[15rem] w-full p-5'>
      <section className='py-1' ref={homeRef} id="home">
        <Home />
        <Resume  />
      </section>

      

      
      <section ref={bioRef} id="bio">
          <Biography />
        </section>

        

        <section ref={workRef} id="work">
          <MyWork />
        </section>

        <section ref={contactRef} id="contact">
          <ContactMe />
        </section>

      </div>
      
      </div>
      <div>
      
      
    </div>
    
    </>
  );
}

export default App;
