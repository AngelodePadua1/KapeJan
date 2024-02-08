import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import MilkTea_Icon_Smoller from '../resources/MilkTea_Icon_Smoller.png';
import FruitTea_Icon_Smoller from '../resources/FruitTea_Icon_Smoller.png';
import IceCoffee_Icon_Smoller from '../resources/IceCoffee_Icon_Smoller.png';
import Frappe_Icon_Smoller from '../resources/Frappe_Icon_Smoller.png';

import 'bootstrap/dist/css/bootstrap.min.css';



import body from './css/body.css';

function HomeBody() {
  return (
    <div id="body">
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                    <h1 className="text-white">Lorem ipsum</h1>
                </Col>
            </Row>
            <Row>
                <h4 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </Row>
        </Container>
        <Container id="menu" className="pt-5 pb-5">
            <h1 className="text-white">Menu</h1>
            <Row>
                <Col sm={12} md={6} lg={3} className="text-center p-5">
                <a href="/milktea">
                    <Image fluid src={MilkTea_Icon_Smoller} alt="" />
                </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center p-5">
                <a href="/fruitTea">
                    <Image fluid src={FruitTea_Icon_Smoller} alt="" />
                </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center p-5">
                <a href="/icedcoffee">
                    <Image fluid src={IceCoffee_Icon_Smoller} alt="" />
                </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center p-5">
                    <a href="/frappe">
                    <Image fluid src={Frappe_Icon_Smoller} alt="" />
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HomeBody;