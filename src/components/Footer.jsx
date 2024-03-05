import React from "react";

function Footer() {
  //Getting current Year
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - Vansh Sikka</p>
    </footer>
  );
}

export default Footer;
