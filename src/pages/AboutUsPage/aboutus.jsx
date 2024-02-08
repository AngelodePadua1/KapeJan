import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./aboutus.css";
import FirstImg from "../../resources/1.png";
import SecondImg from "../../resources/2.png";
import ThirdImg from "../../resources/3.png";
import FourthImg from "../../resources/4.png";
import FifthImg from "../../resources/5.png";


const AboutUs = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <Image src={FirstImg} height="300" width="430" />
          </Col>
          <Col>
            <h1 className="AboutUs">ABOUT US</h1>
            <h1>Our Story</h1>
            <p>
              KAPEJAN was born out of a passion for coffee and a desire to create a space where people could come together to savor the simple pleasures of life. The journey began with a dream to craft the perfect cup of coffee—a blend that would awaken the senses and leave a lasting impression. Through meticulous sourcing, roasting, and brewing, KAPEJAN has transformed that dream into a reality.
            </p>
          </Col>
          <Col>
            <Image src={SecondImg} height="300" width="430" />
          </Col>
        </Row>
      </Container>

      <Container className="text-center">
        <Row>
          <Col>
            <h1>THE KAPEJAN EXPERIENCE</h1>
            <p>
              Step into KAPEJAN, and you'll be greeted by the soothing hum of coffee grinders and the inviting aroma of freshly ground beans. Our cozy and contemporary space is designed to be a haven for coffee enthusiasts, remote workers, and friends looking for a place to unwind. Whether you're in the mood for a classic espresso, a velvety cappuccino, or a bold pour-over, our skilled baristas are here to craft the perfect cup for you. We also offer a curated selection of teas, pastries, and light bites to complement your coffee experience.
            </p>
          </Col>
          <Col>
            <Image src={ThirdImg} height="300" width="439" />
          </Col>
          <Col>
            <h1>Our coffee</h1>
            <p>
              We take pride in sourcing only the finest coffee beans from around the world. Our beans are carefully selected for their unique flavor profiles and ethical origins. From the high-altitude farms of Ethiopia to the lush plantations of Colombia, each cup of KAPEJAN coffee tells a story of dedication, craftsmanship, and sustainability.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="text-center">
        <Row>
          <Col>
            <Image src={FourthImg} height="300" width="430" />
          </Col>
          <Col>
            <h1>COMMUNITY AND SUSTAINABILITY</h1>
            <p>
              At KAPEJAN, we believe in giving back to the communities that nurture our coffee. We are committed to sustainable and ethical practices, ensuring that every step of the coffee journey, from farm to cup, leaves a positive impact on both people and the planet. Join us in our mission to create a vibrant and inclusive community around the love of coffee. Follow us on social media to stay updated on events, promotions, and the latest additions to our menu.
            </p>
          </Col>
          <Col>
            <Image src={FifthImg} height="300" width="430" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;