import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Projects.css'
import img1 from '../../images/project/project1home.png'
import img2 from '../../images/project/project2home.png'
import img3 from '../../images/project/project3home.png'
import img4 from '../../images/project/project1explore.png'
import img5 from '../../images/project/project1admin.png'
import img6 from '../../images/project/project1user.png'
import img7 from '../../images/project/project2service.png'
import img8 from '../../images/project/project2orders.png'
import img9 from '../../images/project/project2manages.png'
import img10 from '../../images/project/project3service.png'
import img11 from '../../images/project/project3doctors.png'
import img12 from '../../images/project/project4home.png'
import img13 from '../../images/project/project4services.png'


const Projects = () => {
     return (
          <Container className="projects-container" fluid>
              <Container>
               <h1 className="text-center text-danger">Here Are Some Of My Projects</h1>
                   <Row className="mt-4">
                   <Col xs={12} md={12} lg={12}>
                         <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Row>
                              <Col xs={12} md={6} lg={6} className="mb-5">
                                   <Card.Img className="img-fluid" variant="top" src={img1} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img4} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img5} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img6} />
                              </Col>

                         </Row>
                         <Card.Body>
                         <Card.Title className="text-danger">Car Zone</Card.Title>
                         <Card.Text className="text-primary">
                         <p>
                         •	The Technology used: React, Bootstrap, Node (Express), Mongo DB, Firebase,
                         </p>
                        <p>
                        •	This is a MERN project containing Admin Level and User level Experiences. Sample For admin login, use email  admin@admin.com with password: 123456.
                        </p>
                        <p> •	Users must log in for purchasing products and remove existing products. </p>
                        <p> •	Admin may add new products, remove existing products, remove user products, update shipping on user products and also make a new admin.</p>
                       
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://niche-product-website-7a068.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>


                    <Col xs={12} md={12} lg={12}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Row>
                              <Col xs={12} md={6} lg={6} className="mb-5">
                                   <Card.Img className="img-fluid" variant="top" src={img2} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img7} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img8} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img9} />
                              </Col>

                         </Row>
                         <Card.Body>
                         <Card.Title className="text-danger">Travel And Tourism</Card.Title>
                         <Card.Text className="text-primary">
                         <p> •	The Technology used: React, Bootstrap, Node (Express), Mongo DB, Firebase</p>
                         <p>•	Users may travel by booking through places and also cancel their booking. </p>
                         <p>   •	Created Private route, Context API, and Google Authentication by Firebase and React.</p>
                         <p>  •    Deployed in Firebase</p>
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://travel-agency-35348.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Row>
                              <Col xs={12} md={6} lg={6} className="mb-5">
                                   <Card.Img className="img-fluid" variant="top" src={img3} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img10} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img11} />
                              </Col>
                             

                         </Row>
                         <Card.Body>
                         <Card.Title className="text-danger">Health Care Service</Card.Title>
                         <Card.Text className="text-primary">
                         <p>•	The Technology used: Html-5, CSS-3, React, React-Router-Dom, Bootstrap, Context-API, Firebase</p>
                        <p> •    First time implement the Firebase Authentication system.</p>
                        <p> •	User may log in with Google Login and Email Password Verification System.</p>
                         <p>•    Deployed in Firebase</p>
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://health-care-service-601f7.web.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                         <Card  className="shadow-lg p-3 mb-5 bg-body rounded">
                         <Row>
                              <Col xs={12} md={6} lg={6} className="mb-5">
                                   <Card.Img className="img-fluid" variant="top" src={img12} />
                              </Col>
                              <Col xs={12} md={6} lg={6}>
                                   <Card.Img className="img-fluid " variant="top" src={img13} />
                              </Col>
                         </Row>
                         <Card.Body>
                         <Card.Title className="text-danger">IT Institute</Card.Title>
                         <Card.Text className="text-primary">
                         <p>
                         • Tech Plan BD 
                         </p>
                         <p> •	The Technology used: React, Bootstrap</p>
                         <p>
                         •    Simple React Based Website 
                         
                         </p>
                         <p>
                         •    First Time Using React Router
                         </p>
                         <p>
                         •    Deployed on Netlify
                         </p>
                         </Card.Text>
                         </Card.Body>
                         <Card.Body>
                         <Card.Link className="card-link-style" href="https://jovial-hamilton-a18c2f.netlify.app/">Visit App</Card.Link>
                         </Card.Body>
                         </Card> 
                    </Col>
                    
                   </Row>
              </Container>
          </Container>
     );
};

export default Projects;