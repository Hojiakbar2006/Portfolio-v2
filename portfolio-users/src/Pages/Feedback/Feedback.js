import React, { useState } from "react";
import "./Feedback.css";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Feedback() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
    data: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/v1/feedbacks/", data)
      .then((res) => {
        toast.success(`Your feedback has been sent ${res.status}`, {
          position: "bottom-left",
          hideProgressBar: true,
          autoClose: 1000,
        });
        setData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: "",
          data: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.message}`,{
          position: "bottom-left",
          hideProgressBar: true,
          autoClose: 1000,
        });
        console.log(err.response.status);
      });
  };

  return (
    <div id="feedback">
      <motion.div
        className="head"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h4>Send For me</h4>
        <h1>Feedback</h1>
      </motion.div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <motion.input
            initial={{ y: -400, x: -400, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, transition: { duration: 0.5 } }}
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <motion.input
            initial={{ y: -400, x: 400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            type="text"
            name="surname"
            value={data.surname}
            placeholder="Surname"
            onChange={handleInputChange}
          />
          <motion.input
            initial={{ y: -400, x: -400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            type="email"
            value={data.email}
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <motion.input
            initial={{ y: -400, x: 400, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            type="number"
            name="phone"
            value={data.phone}
            placeholder="Phone number"
            onChange={handleInputChange}
          />
        </div>
        <motion.textarea
          initial={{ y: 400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          name="message"
          value={data.message}
          placeholder="Messages"
          onChange={handleInputChange}
        ></motion.textarea>
        <motion.button
          initial={{ y: 400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.9 },
          }}
          className="btn"
          type="submit"
          style={{ transition: "none" }}
        >
          Send Feedback
        </motion.button>
      </form>
    </div>
  );
}
