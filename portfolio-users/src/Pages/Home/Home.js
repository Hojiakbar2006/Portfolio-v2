import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import instagram from "../../Assets/Icon/instagram 1.svg";
import phone from "../../Assets/Icon/phone 1.svg";
import telegram from "../../Assets/Icon/telegram 1.svg";
import github from "../../Assets/Icon/github 1.svg";


export default function Home() {
  return (
    <motion.div id="home">
      <figure className="img-card">
        <img src="" alt="" />
      </figure>
      <div className="head">
        <motion.h4
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        >
          Hello I’m
        </motion.h4>
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          Nasriddinov Hojiakbar
        </motion.h1>
        <motion.h2
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.4 },
          }}
        >
          Fullstack_Developer
        </motion.h2>
      </div>{" "}
      <div className="links">
        <motion.a
          href="http://"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.8 },
          }}
        >
          <img src={instagram} alt="icon" />
          <span>Instagram</span>
        </motion.a>
        <motion.a
          href="http://"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 1 },
          }}
        >
          <img src={telegram} alt="icon" />
          <span>Telegram</span>
        </motion.a>
        <motion.a
          href="http://"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 1.2 },
          }}
        >
          <img src={phone} alt="icon" />
          <span>Phone</span>
        </motion.a>
        <motion.a
          href="http://"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 1.4 },
          }}
        >
          <img src={github} alt="icon" />
          <span>Github</span>
        </motion.a>
      </div>
      <motion.div
        className="btns"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.6 },
        }}
      >
        <a className="btn" href="#w">
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
}
