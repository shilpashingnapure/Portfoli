import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../styles/projects.css";
import projects from "../data.json";

function Projects() {
  console.log(projects);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "6rem",
    dots: true,
    speed: 500,
    slidesToShow: 4,
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

  const [projectData, setData] = useState({});

  return (
    <div class="slider-div">
      <Slider {...settings}>
        {/* small projects*/}
        {projects.map((project, index) => {
          return (
            <div className={`silde-div img--${index + 1}`}>
              <div className="projectName">
                <div className="Projectheading">
                  <h5>{project.project_title}</h5>
                </div>
                <div className="projectLearn">
                  <button
                    className="learn_more"
                    onClick={() => {
                      setData(project);
                      setitem(project.project_id);
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* showing specitfic project details*/}
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
                {/* <img src={require("../img/kem-hero.png")} alt="" />
                <img src={require("../img/kem-hero.png")} alt="" />
                <img src={require("../img/profile.jpg")} alt="" /> */}
                {projectData.images.map((img) => {
                  return <img src={require("../img/" + img)} alt="" />;
                })}
              </Slider>
            </div>
            <div className="project-detail--description">
              <h1>{projectData.project_title}</h1>
              <h3>project related to</h3>
              <hr />
              <p>{projectData.projectDetails}</p>
              {projectData.tech_stack.map((img) => {
                return (
                  <img
                    src={require("../img/" + img)}
                    width="20px"
                    height="20px"
                    alt=""
                  />
                );
              })}
              <div>
                <a
                  href={projectData.project_live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <button onClick={() => setitem(null)} className="close--btn">
                  <img
                    src="https://w7.pngwing.com/pngs/114/546/png-transparent-fish-pie-pie-chart-computer-icons-css-miscellaneous-logo-pie.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
