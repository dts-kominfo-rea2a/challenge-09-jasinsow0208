// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ photo, name, phone, email }) => {
  return (
    <div className="contact">
      <span>
        <img className="foto" src={photo} alt="foto"></img>
      </span>
      <span>
        <div className="infoContact">
          <h4>{name}</h4>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </span>
    </div>
  );
};

export default Contact;
