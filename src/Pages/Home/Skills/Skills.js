import React from 'react';
import { Container } from 'react-bootstrap';
import './Skills.css'

const Skills = () => {
     return (
          <Container className="mt-5 mb-5">
               <h1 className="text-primary text-center mb-5">MY SKILLS</h1>
               <div className="icon-container d-flex justify-content-center align-items-center">
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                         <i className="text-secondary fa-4x fab fa-html5 "></i>
                         <h2 className="text-primary fw-bold">HTML</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i className="text-secondary fab fa-css3-alt fa-4x"></i>
                         <h2 className="text-primary fw-bold">CSS</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i className="text-warning fa-4x fab fa-js-square"></i>
                         <h2 className="text-primary fw-bold">Javascript</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i className="text-info fa-4x fab fa-bootstrap"></i>
                         <h2 className="text-primary fw-bold">Bootstrap</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i class="text-info fa-4x  fab fa-react"></i>
                         <h2 className="text-primary fw-bold">React</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i className="text-info fa-4x fab fa-node-js"></i>
                         <h2 className="text-primary fw-bold">Node</h2> 
                    </p>
                    
                    <p className="d-flex flex-column justify-content-center align-items-center me-5">
                    <i className="text-info fa-4x fab fa-github"></i>
                         <h2 className="text-primary fw-bold">GitHub</h2> 
                    </p>
                    
                    
                    
               </div>
          </Container>
     );
};

export default Skills;