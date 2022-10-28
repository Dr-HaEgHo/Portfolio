import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container} from "react-bootstrap";
import { meta, dataportfolio } from "../../content_option";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Showcase from "../../components/Showcase.jsx"





export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
          <div className="portfolio">
          <Carousel
              className="port-swiper"
              autoPlay={true}
              infiniteLoop={true}
              loop={true}
              swipeable={true} 
              showStatus={false}
              showThumbs={false}
            >
              {
              dataportfolio?.map((item, i) => (
                  <div key={i} className="each-slide">
                  <Showcase
                    image={item.img}
                    title={ item.title}
                    description={ item.description }
                    github={item.github}
                    demo={item.demo}
                  />
                  </div>
                ) )
              }
            </Carousel>
          </div>
      </Container> 
    </HelmetProvider>
  );
};
