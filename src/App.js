import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
import Projects from "./components/project";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about"  style={{ height: "15vh"}}></div>
        <div className="stack-header" data-aos={"fade-left"}>
          <p className="highlight">To Know</p>
          <h2 className="head" style={{ marginBottom:"4.5rem"}}>About me</h2>
        </div>

      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Forest Essentials India Clone"}
            description={
              "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products. We implement basic e-commarce all functionalites. buy prodcuts ,add to cart , payment getway,search funtionalites etc. we are 2nd rank holder amongst 100+ projects. Team of 6 Members. "
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["forest.gif", "forest1.PNG", "forest3.png"]}
            links={[
              "https://shilpashingnapure.github.io/forestessentialsindia/",
              "https://github.com/shilpashingnapure/forestessentialsindia",
              "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"Theory Clone"}
            description={
              "New York fashion brand “Theory” is based on women’s and men’s contemporary fashion label. We tried to implement E-commerce functionalities product database, Add to cart, search, admin page, Authorization, Payment, OTP verification using Gmail API, etc. Won 1 rank amongst 70+ projects. Team of 5 members."
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
            links={[
              "https://backend-theory.herokuapp.com/",
              "https://github.com/shilpashingnapure/Theory_Clone-Backend",
              "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>

        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Mailchimp Clone"}
            description={
              "Mailchimp is a marketing automation platform and email marketing service. we tried to implement the features are create new email and customize existing email templates, Send templates through email and keep records of email sending, Can do email marking to multiple users. Team of 6 Members."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/react-logo.svg",
              "tech/node.webp",
              "tech/express.png",
              "tech/mongo.png",

            ]}
            imges={["mailchimp1.PNG", "mailchimp2.PNG", "mailchimp3.PNG"]}
            links={[
              "https://mailchimp-frontend.vercel.app/",
              "https://github.com/shilpashingnapure/Clone-of-Mailchimp",
              "https://player.vimeo.com/video/756101155?h=e6e013b7d8",
            ]}
          />
        </div>
        <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
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
