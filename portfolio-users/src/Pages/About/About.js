import React from "react";
import "./About.css";
import icon from "../../Assets/Icon/medal.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
export default function App(){
  const navigate = useNavigate()
  return (
    <div id="about">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h4>Get to know</h4>
        <h1>About me</h1>
      </motion.div>
      <div className="main">
        <div className="left">
          <motion.figure
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              rotate: 110,
              transition: { duration: 0.4, delay: 0.4 },
            }}
          ></motion.figure>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          ></motion.div>
        </div>
        <div className="right">
          <div className="notice">
            <motion.div
              className="box"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.4 },
              }}
            >
              <img src={icon} alt="icon" />
              <h4>Experience</h4>
              <p>3+ yearsWorking</p>
            </motion.div>
            <motion.div
              className="box"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
            >
              <img src={icon} alt="icon" />
              <h4>Experience</h4>
              <p>200+ Worldwide</p>
            </motion.div>
            <motion.div
              className="box"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4 },
              }}
            >
              <img src={icon} alt="icon" />
              <h4>Experience</h4>
              <p>80+ Completed</p>
            </motion.div>
          </div>
          <motion.div
            className="text"
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.8 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            repreenderit quidem quia deserunt, molestiae, eligendi amet repellat
            molestias quos
          </motion.div>
          <motion.button
            className="btn"
            href="/send-feedback"
            onClick={() => navigate("/feedback")}
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 1 },
            }}
            style={{ transition: "none" }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </div>
  );
}
