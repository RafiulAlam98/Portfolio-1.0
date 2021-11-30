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
                    <Col xs={12} md={6} lg={6} className="mt-5 d-flex justify-content-center">
                        <div>
                        <h5 className="text-secondary">WELCOME TO MY WORLD</h5>
                         <h1>
                         Hi, I’m <span className="custom-color">Rafiul Alam </span>
                         a   <Typewriter
                         options={{
                         strings: ['Web Developer', 'Professional Coder'],
                         autoStart: true,
                         loop: true,
                         }}
                         />
                         </h1>
                         
                         
                         <a className="me-2" href='https://www.linkedin.com/in/m-rafiul-alam-65908a202/'><i className="icon-style rounded  fab fa-linkedin-in fa-lg"></i></a>
                         <a className="me-2" href='https://github.com/RafiulAlam98'><i className="icon-style rounded fab fa-github fa-lg"></i></a>
                         <a className="me-2 icon-style rounded  fw-bold" href="https://drive.google.com/file/d/1d7YuNVZ4CkCK1mZm9r3FntWiA0Zleiyr/view?usp=sharing">RESUME</a>
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