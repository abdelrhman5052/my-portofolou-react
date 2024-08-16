
import './hero.css';
import Lottie from "lottie-react";
import pcAnimation from "../../../public/animation/Animation - 1723676089771.json"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero flex ">

      <div className="left-section ">

        <div className="parent-avatar flex">
          <motion.img 
          initial={{transform : "scale(0)"}}
          animate={{transform : "scale(1)"}}
          transition={{damping:6 , type: "spring", stiffness : 100}}
          src="../../../dist/img/super2.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}

        className="title">
          Software designer, founder, and amateur astronaut
        </motion.h1>

        <p className="sup-title">
          I’m Abdelrhman Mohamed, a software designer and entrepreneur based in
          Egypt. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="all-icons flex">

          <a  href='https://www.twitter.com' className="icon icon-twitter"></a>
          <a  href='https://www.instagram.com/abdelrhman_elmasry_502/' className="icon icon-instagram"></a>
          <a  href='https://github.com/abdelrhman5052?tab=repositories' className="icon icon-github"></a>
          <a  href='https://www.linkedin.com/in/abdelrhman-elmasry-177783231/' className="icon icon-linkedin-square"></a>

        </div>

      </div>

      <div className="right-section animation1 ">
        <Lottie className='pc-animation'animationData={pcAnimation} />
        </div>
    </section>
  );
}

export default Hero;
