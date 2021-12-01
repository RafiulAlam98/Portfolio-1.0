import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import img from '../../../images/myphoto/259313543_187647116910933_4044872418203406364_n-removebg-preview (1).png'


const Banner = () => {
     return (
          <Container fluid className="banner-container">
               <Container>
               <Row >
                    <Col xs={12} md={6} lg={6} className="mt-5 d-flex justify-content-start">
                        <div>
                         <h1 className="text-info">
                         Hi, I’m <span className="custom-color">Rafiul Alam </span>
                         a   <Typewriter
                         options={{
                         strings: [ "Web Developer",   "Front-End Developer", "Web Designer", "JavaScript Developer", "Backend Developer", "React Developer", "Node Js Developer",   "Full-Stack Web Developer(MERN)",],
                         autoStart: true,
                         loop: true,
                         }}
                         />
                         </h1>
                         
                       <div className="mt-5">
                              
                         <a className="me-3" href='https://www.linkedin.com/in/m-rafiul-alam-65908a202/'><i className="icon-style rounded  fab fa-linkedin-in fa-lg"></i></a>
                         <a className="me-3" href='https://github.com/RafiulAlam98'><i className="icon-style rounded fab fa-github fa-lg"></i></a>
                         <a className="me-2 icon-style rounded  fw-bold" href="https://drive.google.com/file/d/1d7YuNVZ4CkCK1mZm9r3FntWiA0Zleiyr/view?usp=sharing">Get Resume</a>
                        </div>
                       </div>
                         
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

export default Banner;