import "../App.css";
function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">
        <img
          src="https://images-platform.99static.com//X5kQtzlPzvORSXwLJ9Pn-iHRkbc=/180x1161:823x1803/fit-in/500x500/99designs-contests-attachments/61/61431/attachment_61431386"
          width="50px"
          height="50px"
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div class="right--nav">
        <div class="active">
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
        <div class="cv">Resume</div>
      </div>
    </div>
  );
}

export default Navbar;
