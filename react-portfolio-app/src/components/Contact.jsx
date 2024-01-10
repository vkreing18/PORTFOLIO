import React, { useState } from "react";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission actions here

    // Set the "Thank you" message
    setThankYouMessage("Thank you for your message!");

    // Reset the form
    e.target.reset();

    // Set a timeout to clear the "Thank you" message after a few seconds
    setTimeout(() => {
      setThankYouMessage("");
    }, 5000); // Adjust the time (in milliseconds) as needed
  };

  return (
    <div className="contact-container" id="contact">
      {/* Contact info */}
      <div className="contact-info">
        <h2>Contact Me.</h2>
        <p>
          I am available for any queries. Connect with me via phone:{" "}
          <span>+91 9778412240</span> or email: <span>sahid.officialmail@gmail.com</span>
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Your name *" required />
          <input type="email" name="email" id="email" placeholder="Your email *" required />
          <input type="text" name="subject" id="subject" placeholder="Write a subject" />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
          <button className="btn" type="submit">Submit</button>
          
        </form>
        {/* Thank you message */}
        {thankYouMessage && <p className="thank-you">{thankYouMessage}</p>}
      </div>
      {/* Image */}
      <div className="contact-img">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
