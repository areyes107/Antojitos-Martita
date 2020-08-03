import React from "react";
import './footer.component.css';

const Footer = () => {
  return (
    <>
      <footer>
        <p className="text-center mt-4">
          &copy;{new Date().getFullYear()} | Made with 💖 by TCode <br />
         <b> Telefono:</b> 54627157 <br/>
         <b>Facebook Page:</b> <a href="https://www.facebook.com/comedor.martita.90"> Comedor Martita </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
