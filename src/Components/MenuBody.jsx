import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';


function MenuBody() {
  return (
    <Container className="pt-5 pb-5">
        <Row>
            <Col>
                <h1>Lorem ipsum</h1>
            </Col>
        </Row>
        <Row>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        </Row>
    </Container>
  );
}

export default MenuBody;