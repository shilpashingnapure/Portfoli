import "../App.css";
function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">S</div>
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
        <div class="cv">Download CV</div>
      </div>
    </div>
  );
}

export default Navbar;
