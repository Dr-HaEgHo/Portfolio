import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import myself from "../../assets/images/myself.gif"

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div 
            className="myself-gif"
            // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            <img src={myself} alt="my-self.png" />
          </div>
          <div className="text ">
            <div className="align-self-center ">
              <div className="intro">
                <h2 className="my-name">{introdata.title}</h2> 
                <h1 className="fluidz-48 type-text">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true, 
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="my-description">{introdata.description}</p>
                <div className="intro_btn-action pb-5 flex">
                  <Link to="/portfolio" className="text_2">
                    <div className="home-portfolio-btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div className="home-contact-btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};