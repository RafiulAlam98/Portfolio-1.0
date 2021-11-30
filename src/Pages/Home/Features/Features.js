import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Features.css'

const Features = () => {
     return (
          <Container className="mt-3">
              <Row>
                    <Col xs={12} md={6} lg={6}>
                         <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Card.Img variant="top" src="https://image.freepik.com/free-vector/car-company-logo-template_1071-3.jpg" />
                         <Card.Body>
                         <Card.Title className="text-info">NICHE PRODUCT APP</Card.Title>
                         <Card.Text>
                              
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://niche-product-website-7a068.web.app/">Visit The App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Card.Img variant="top" src="https://image.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6160.jpg" />
                         <Card.Body>
                         <Card.Title className="text-info">NICHE PRODUCT APP</Card.Title>
                         <Card.Text>
                              
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://niche-product-website-7a068.web.app/">Visit The App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                 
              </Row> 
          </Container>
     );
};

export default Features;