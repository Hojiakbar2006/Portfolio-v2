import React from "react";
import icon from "../../Assets/Icon/medal.svg";
import { motion } from "framer-motion";

import instagram from "../../Assets/Icon/instagram 1.svg";
import telegram from "../../Assets/Icon/telegram 1.svg";
import github from "../../Assets/Icon/github 1.svg";

export default function LearnMore() {
  return (
    <div id="about">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h4>Get to know</h4>
        <h1>Teammate's name</h1>
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
          <div style={{ display: "flex", gap: 40 }}>
            <motion.a
              href="/send-feedback"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 1.8 },
              }}
            >
              <img src={github} alt="" />
            </motion.a>
            <motion.a
              href="/send-feedback"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 1.4 },
              }}
            >
              <img src={instagram} alt="" />
            </motion.a>
            <motion.a
              href="/send-feedback"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 1 },
              }}
            >
              <img src={telegram} alt="" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
