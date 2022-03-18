import "../App.css";
import { useState } from "react";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://images-platform.99static.com//X5kQtzlPzvORSXwLJ9Pn-iHRkbc=/180x1161:823x1803/fit-in/500x500/99designs-contests-attachments/61/61431/attachment_61431386"
          width="50px"
          height="50px"
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="menu_toggle" onClick={settoggle(!toggle)}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
        />
      </div>
      <div className="right--nav">
        <div className="active">
          <a href="#top">Home</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#tech">Tech stack</a>
        </div>
        <div>
          <a href="#projects">Portfolio</a>
        </div>
        <div>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="cv">Resume</div>
      </div>
    </div>
  );
}

export default Navbar;
