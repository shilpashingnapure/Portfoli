import SquareDot from "./square-dot";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "80px",
  };

  const [item, setitem] = useState(null);
  return (
    <div class="slider-div">
      <Slider {...settings}>
        {/* PROJECT DIV 1*/}
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button onClick={() => setitem("project1")}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="silde-div">
          <div className="projectName">
            <div className="Projectheading">
              <h2>Hello</h2>
            </div>
            <div className="projectLearn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </Slider>

      {item == "project1" ? (
        <div className="projectleft">
          Hello this is project one
          <button onClick={() => setitem(null)}>close</button>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
