import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../slide1/Slide1.webp"
import Slide2 from "../../slide2/Slide2.webp";
import Slide3 from "../../slide3/Slide3.webp";
import styles from './portfolio.module.css';
import TitleMessage from "../../components/TitleMessage"


class Portfolio extends Component {
  render() {

    return (

      <div className="home">
       <TitleMessage />

        <Carousel controls={false} indicators interval={1000} pauseOnHover={false}>

          <Carousel.Item>
            <img className={styles.custom} src={Slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.custom} src={Slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.custom} src={Slide2} alt="Second slide" />
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default Portfolio;