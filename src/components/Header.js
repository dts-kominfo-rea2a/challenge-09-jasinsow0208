// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Call a Friend</h1>
      <h4>your friendly contact app</h4>
      <h4 className="bintang">
        ***************************************************************************
      </h4>
    </div>
  );
};

export default Header;
