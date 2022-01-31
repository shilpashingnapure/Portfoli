import SquareDot from './square-dot'
import ProjectDetail from './projectdetail';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Projects(){
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        infinite:true,
        slidesToShow: 2,
        dots:true,
        arrows: true
      };

      const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));
    return (
        <div class="techstack projects">
            <SquareDot/>
            <div class="stack-header">
                <p class="highlight">My Project</p>
                <h2 class="head">My Portfolio</h2>
            </div>

            <div class="projects-div">
                <div class="projectCate">
                    <div>All</div>
                    <div>Django</div>
                    <div>ReactJs</div>
                    <div>JavaScripts</div>
                </div>
                <div class="project--show">
                    <Slider 

                        adaptiveHeight={true}
                        slidesToShow = {2}
                        slidesToScroll = {1}
                    >
                        {renderSlides()}
                    </Slider>
                </div>    
            </div>
        </div>    
    );
}

export default Projects;