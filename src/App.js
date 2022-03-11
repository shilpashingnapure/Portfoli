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
      <About />
      <TechStack />
      <div>
        <div class="stack-header">
          <p class="highlight">My projects</p>
          <h2 class="head">Top Project</h2>
        </div>
        <Toproject
          projectdata={"forestessentialsindia"}
          imges={["forest.gif", "1.PNG", "profile.jpg"]}
        />
        <div className="top_left">
          <Toproject
            projectdata={"forestessentialsindia"}
            imges={["forest.gif", "1.PNG", "profile.jpg"]}
          />
        </div>

        <Toproject
          projectdata={"forestessentialsindia"}
          imges={["forest.gif", "1.PNG", "profile.jpg"]}
        />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
