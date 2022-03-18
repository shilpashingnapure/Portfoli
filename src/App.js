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
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header">
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt">
          <Toproject
            projectdata={"Forest Essentials India Clone"}
            description={
              "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products. Our project we implement front-end only. Additionally we use rapidapi to fetch the products. Team of 6 Members. "
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["forest.gif", "forest1.PNG", "forest3.png"]}
          />
        </div>
        <div className="top_left">
          <Toproject
            projectdata={"Theory Clone"}
            description={
              "New York fashion brand “Theory” is based on women’s and men’s contemporary fashion label. We tried to implement E-commerce functionalities product database, Add to cart, search, Authorization, Payment, OTP verification using Gmail API, etc. Team of 5 members."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["theory1.png", "theory2.png", "theory3.png"]}
          />
        </div>

        {/* <div className="top_right">
          <Toproject
            projectdata={"forestessentialsindia"}
            imges={["forest.gif", "1.PNG", "profile.jpg"]}
          />
        </div> */}
        <div className="stack-header" style={{ marginBottom: "35px" }}>
          <p className="highlight">Mini Project's</p>
        </div>
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
