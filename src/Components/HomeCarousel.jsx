import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import './css/carousel.css';

import HomeCarousel_1 from '../resources/HomeCarousel_1.jpg';
import HomeCarousel_2 from '../resources/HomeCarousel_2.jpg';
import HomeCarousel_3 from '../resources/HomeCarousel_3.jpg';
import Background_img from '../resources/Background_img.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function HomeCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src={HomeCarousel_1} alt="" height={850}/>
          <Carousel.Caption>
            <h3>Making Mornings Better</h3>
            <p3>Begin Your Morning with a Coffee.</p3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={HomeCarousel_2} alt="" height={850}/>
           <Carousel.Caption>
            <h3>Coffee Makes Dreams Come True</h3>
            <p3>Keep pushing. No stopping. Fully focused.</p3>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>
          <Image src={HomeCarousel_3} alt="" height={850}/>
          <Carousel.Caption>
            <h3>Relax. Refresh. Recharge.</h3>
            <p3>
              Elevate Your Day, Sip by Sip
            </p3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;