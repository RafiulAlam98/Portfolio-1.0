import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'


const Contact = () => {
     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_a6cwj18', 'template_uzi6put', form.current, 'user_ey965KOdwNxfOzoELomzi')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         e.target.reset()
     };
   
     return (
         <Container className="contact-container" fluid >
          <Container>
          <Row>
              <h1 className="get-in-touch fw-bolder ">Get in touch</h1>
                   <Col xs={12} md={6} lg={6} className="mt-3">
                       <h5 className="text-danger">
                       7/D, Road No.3, Mirpur
                       </h5>  
                       <h1 className="text-danger">
                        Dhaka, Bangladesh
                       </h1>  
                       <div className="d-flex align-items-center mt-4">
                           <h2 className="text-danger">Phone:</h2>
                           <div className="ms-2">
                                <h5 className="text-danger">+8801648886671</h5>
                                <h5 className="text-danger">+8801743714175</h5>
                           </div>
                       </div>
                       <div className="d-flex align-items-center mt-
                       2">
                       <h3 className="text-danger">Email:</h3>
                       <div className="ms-3">
                                <h5 className="text-danger">mrafiul.alam7@gmail.com</h5>   
                           </div>
                       </div>
                        <div className="mt-2 mb-3">
                            <a href="https://www.facebook.com/rafiul.alam.121"><i className="fab fa-facebook fa-2x me-3"></i></a>

                            <a href="https://www.linkedin.com/in/m-rafiul-alam-65908a202/"><i className="fab fa-linkedin fa-2x me-3"></i></a>

                            <a href="https://github.com/RafiulAlam98"><i className="fab fa-github fa-2x"></i></a>
                        </div>

                   </Col>
                   <Col xs={12} md={6} lg={6}>
                         <form className="d-flex flex-column justify-content-end mx-auto" ref={form} onSubmit={sendEmail}>
                         <label className="text-color">Name</label>
                         <input type="text" name="user_name" />
                         <label className="text-color">Email</label>
                         <input type="email" name="user_email" />
                         <label className="text-color">Message</label>
                         <textarea name="message" />
                         <input className="text-color mt-2" type="submit" value="Send" />
                         </form>
                   </Col>
              </Row>
          </Container>
         </Container>
     );
};

export default Contact;