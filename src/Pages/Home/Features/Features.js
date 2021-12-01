import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/project/project1home.png'
import img2 from '../../../images/project/project2home.png'
import img3 from '../../../images/project/project3home.png'

import './Features.css'

const Features = () => {
     return (
          <Container className="mt-3 feature-container" fluid>
              <Container>
              <Row>
              <h1 className="get-in-touch text-primary mb-3">Projects</h1>
                    <Col xs={12} md={6} lg={6}>
                         <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Card.Img variant="top" src={img1} />
                         <Card.Body>
                         <Card.Title className="text-danger">Car Zone</Card.Title>
                         <Card.Text className="text-primary">
                         •	The Technology used: React, Bootstrap, Node (Express), Mongo DB, Firebase,
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://niche-product-website-7a068.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Card.Img variant="top" src={img2}/>
                         <Card.Body>
                         <Card.Title className="text-danger">Travel And Tourism</Card.Title>
                         <Card.Text className="text-primary">
                         •	The Technology used: React, Bootstrap, Node (Express), Mongo DB, Firebase
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://travel-agency-35348.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Card.Img variant="top" src={img3}/>
                         <Card.Body>
                         <Card.Title className="text-danger">Health Care Service</Card.Title>
                         <Card.Text className="text-primary">
                         •	The Technology used: Html-5, CSS-3, React, React-Router-Dom, Bootstrap, Context-API, Firebase
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://health-care-service-601f7.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                 
              </Row> 
              </Container>
          </Container>
     );
};

export default Features;