import "./App.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
import Projects from "./components/project";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <div id="about" style={{ height: "15vh" }}>
        <div class="stack-header">
          <p class="highlight">To Know</p>
          <h2 class="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div class="stack-header">
          <p class="highlight">My projects</p>
          <h2 class="head">Top Project</h2>
        </div>
        <div className="top_right mt">
          <Toproject
            projectdata={"Forest Essentials India"}
            imges={["forest.gif", "1.PNG", "profile.png"]}
          />
        </div>
        <div className="top_left">
          <Toproject
            projectdata={"Theory Clone"}
            imges={["theory.png", "1.PNG", "profile.jpg"]}
          />
        </div>

        {/* <div className="top_right">
          <Toproject
            projectdata={"forestessentialsindia"}
            imges={["forest.gif", "1.PNG", "profile.jpg"]}
          />
        </div> */}
        <div className="project_div">
          <Projects />
        </div>
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
