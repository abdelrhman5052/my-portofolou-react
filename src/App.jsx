import Hero from './components/2-hero/Hero';
import Header from './components/1-header/Header';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/contact';
import Footer from './components/5-footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setState(true);
      } else {
        setState(false)
      }
    })

  },[])


  const [state, setState] = useState(false);

  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />


              <a href="#up" style={{opacity : state ? 1 : 0 , transition: "0.5s"}}>
              <button className="scroll2top icon-keyboard_arrow_up"></button>
              </a> 
    </div>
  )
}

export default App
