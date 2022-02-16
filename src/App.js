import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Top from "./components/top_project";
import Projects from "./components/project";
import Footer from "./components/footer";
import Contact from "./components/contact";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Top />
      <div className="top_left">
        <Top />
      </div>
      <Top />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
