import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";


  const Main = () => {

    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setarr] = useState(myProjects);

  return (
    <main className="flex">
      <section className="left-section flex">




        <button onClick={() => {
          setcurrentActive("all");
          const newArry1 = myProjects.filter((item)  => {
            return item;
          })
          setarr(newArry1)
        }}  className={currentActive === "all"? "active" : null}>
          All Projects</button>





        <button onClick={() => {
          setcurrentActive("css");
          const newArry = myProjects.filter((item) => {
            return item.category === "css";
          })
          setarr(newArry);
        }} className={currentActive === "css"? "active" : null}>
          HTML & CSS</button>




        <button onClick={() => {
          setcurrentActive("js");
          const newArry2 = myProjects.filter((item) => {
            return item.category === "js";
          })
          setarr(newArry2);
        }} className={currentActive === "js"? "active": null}>JavaScript</button>

        <button onClick={() => {
          setcurrentActive("react");
          const newArry3 = myProjects.filter((item) => {
            return item.category === "react";
          })
          setarr(newArry3);
        }} className={currentActive === "react" ? "active": null}>React & MUI</button>

      </section>
 


      <section className="right-section flex">

            <AnimatePresence>


        {arr.map((item) => {
          return (
            <motion.article 
            
            layout
            initial={{transform: "scale(0)"}}
            animate={{transform: "scale(1)"}}
            transition={{type: "spring", damping: 6, stiffness: 100}}

            key={item.imgPath} className="card ">

        <img width={210} src={item.imgPath} alt="" />
        <div style={{width: "210px"}} className="box">
          <h1 className="title">{item.projectTitle}</h1>
          <p className="sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officiis pariatur repellendus. Deserunt, corrupti facilis.</p>

          <div className="flex icons">
          <div style={{gap: "11px"}} className="flex">
          <a href="" className="icon-link"></a>
          <a href="" className="icon-github"></a>
          </div>
            <a href="" className="link flex">
              more
              <span style={{alignSelf: "end"}} className="icon-arrow-right"></span>
            </a>
          </div>
        </div>


            </motion.article>
          );
        })}

</AnimatePresence>



      </section>
    </main>
  );
};

export default Main;
