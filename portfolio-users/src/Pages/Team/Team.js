import React from "react";
import "./Team.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Team() {
    const navigate = useNavigate()
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <motion.svg
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.5 },
        }}
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="right-arrow"
        fill="#fff"
      >
        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
      </motion.svg>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <motion.svg
        onClick={onClick}
        className={className}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: .4, delay:.5 } }}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="left-arrow"
        fill="#fff"
      >
        <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path>
      </motion.svg>
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div id="team">
        <motion.div
          className="head"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <h4>Get to know</h4>
          <h1>My Team</h1>
        </motion.div>
        <motion.div
          className="container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        >
          <Slider {...settings}>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
            <div className="profile-card">
              <div className="img-card">
                <figure></figure>
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3 className="title">Omadbek</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam vitae saepe quibusdam velit quod temporibus? Incidunt
                  labore unde error dignissimos!
                </p>
              </div>

              <button
                onClick={() => navigate("/learn-more")}
                className="btn"
              >
                Learn more
              </button>
            </div>
          </Slider>
        </motion.div>
      </div>
    </>
  );
}
