import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../styles/projects.css";

function Projects() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "6rem",
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const smallProject = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const [item, setitem] = useState(null);
  return (
    <div class="slider-div">
      <Slider {...settings}>
        {/* PROJECT DIV 1*/}
        <div className="silde-div img--1">
          <div className="projectName">
            <div className="Projectheading">
              <h3>YouTube Clone</h3>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project1")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT DIV 2*/}
        <div className="silde-div img--2">
          <div className="projectName">
            <div className="Projectheading">
              <h3>Github Clone</h3>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project2")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT DIV 3*/}
        <div className="silde-div img--3">
          <div className="projectName">
            <div className="Projectheading">
              <h3>Disqus Clone</h3>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project3")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT DIV 4*/}
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project4")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT DIV 5*/}
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project5")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT DIV 6*/}
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button
                className="learn_more"
                onClick={() => setitem("project6")}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </Slider>

      {item != null ? (
        <div className="projectleft">
          <div
            className="project-detail"
            onMouseLeave={(e) => {
              console.log("Triggered because this input lost focus");
            }}
          >
            <div className="project-detail--img">
              <Slider {...smallProject}>
                <img src={require("../img/1.PNG")} alt="" />
                <img src={require("../img/kem-hero.png")} alt="" />
                <img src={require("../img/profile.jpg")} alt="" />
              </Slider>
            </div>
            <div className="project-detail--description">
              <h1>Project name</h1>
              <h3>project related to</h3>
              <hr />
              <p>Project Details</p>
              <div>
                <button>Visit Site</button>
                <button onClick={() => setitem(null)}>X</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
