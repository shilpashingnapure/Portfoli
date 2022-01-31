import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js' 
import Header from './components/header.js';
import About from './components/about';
import TechStack from './components/techstack';
import Projects from './components/project';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </div>
    
  );
}

export default App;
