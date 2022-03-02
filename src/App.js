import logo from "./logo.svg";
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
      <Toproject />
      <div className="top_left">
        <Toproject />
      </div>

      <Toproject />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
