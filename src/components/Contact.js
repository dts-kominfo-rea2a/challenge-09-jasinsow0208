// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="contact">
      <span>
        <img className="foto" src={data.photo} alt="foto"></img>
      </span>
      <span>
        <div className="infoContact">
          <h4>{data.name}</h4>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </span>
    </div>
  );
};

export default Contact;
