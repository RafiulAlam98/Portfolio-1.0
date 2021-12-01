import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import img from '../../images/myphoto/259313543_187647116910933_4044872418203406364_n-removebg-preview (1).png'

const About = () => {
     return (
          <Container fluid className="about-container mb-5">
              <Container>
               <Row>
                    <Col xs={12} md={6} lg={6}>
                         <h1 className="text-center text-white mt-3 mb-3">About Me</h1>
                         <p className="fs-4 text-white">
                         I am Rafiul. I am a web developer(MERN). I can learn anything at any time. For that, I take the help of Google and YouTube. 
                         Since 2/3 months, I’ve worked out almost 7-8 hours in relating to Html-5, CSS-3, and vanilla JavaScript. Furthermore, I’ve executed 2/3 projects by using JavaScript Library (REACT) with API and Node JS as JavaScript runtime. Now, I’m confident enough and comfortable to develop any of MERN’s projects.  
                         </p>
                         <p className="fs-4 text-white mt-5">
                              <span>Full Name</span>
                              <span> : M. Rafiul Alam</span>
                         </p>
                              
                         <p className="fs-4 text-white">
                              <span>Age</span>
                              <span>: 23</span>
                         </p>

                         <p className="fs-4 text-white">
                              <span>Nationality</span>
                              <span>: Bangladeshi</span>
                         </p>

                         <p className="fs-4 text-white">
                              <span>Languages</span>
                              <span>: English, Bangla</span>
                         </p>
                              

                         <p className="fs-4 text-white">
                              <span>Address</span>
                              <span>: 7/D Road.3 Section.2 Mirpur, Dhaka</span>
                         </p>
                              
                         <p className="fs-4 text-white">
                              <span>Country</span>
                              <span>: Bangladesh</span>
                         </p>
                              
                    </Col>

                    <Col xs={12} md={6} lg={6} >
                    <div className="d-flex justify-content-center">
                    <img  src={img} alt="" />
                    </div>
                    </Col>
               </Row>
              </Container>
             
          </Container>
     );
};

export default About;