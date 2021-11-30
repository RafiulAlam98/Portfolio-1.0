import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
          <form className="d-flex flex-column w-50 mx-auto mt-3 mb-3" ref={form} onSubmit={sendEmail}>
               <label>Name</label>
               <input type="text" name="user_name" />
               <label>Email</label>
               <input type="email" name="user_email" />
               <label>Message</label>
               <textarea name="message" />
               <input type="submit" value="Send" />
          </form>
     );
};

export default Contact;