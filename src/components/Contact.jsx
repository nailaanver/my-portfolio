import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiHome, FiPhone, FiMail } from "react-icons/fi";
import "../styles/contact.css";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_@123",      // replace with your Service ID
      "template_f5ayfx5",     // replace with your Template ID
      form.current,
      "mYWLBevPqTuFgXuoP"          // replace with your Public Key
    ).then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        
        <div className="contact-content">
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <textarea 
              name="message"
              placeholder="Enter Message" 
              rows="6"
              required
            ></textarea>

            <div className="form-row">
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name"
                required
              />

              <input 
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <input 
              type="text"
              name="subject"
              placeholder="Enter Subject"
              required
            />

            <button type="submit" className="send-btn">SEND</button>

          </form>

          <div className="contact-info">
            
            <div className="info-item">
              <div className="icon-wrapper">
                <FiHome className="contact-icon" />
              </div>
              <div>
                <h4>Calicut, Kerala</h4>
                <p>India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <FiPhone className="contact-icon" />
              </div>
              <div>
                <h4>+91 9778093413</h4>
                <p>Mon to Sat 9am to 6pm</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <FiMail className="contact-icon" />
              </div>
              <div>
                <h4>fathimanaila71@email.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;