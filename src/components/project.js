import SquareDot from './square-dot'
import ProjectDetail from './projectdetail';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Projects(){
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
      };

     return (
         <div class="slider-div">
        <Slider {...settings}>
            <ProjectDetail/>
            <ProjectDetail/>
            <ProjectDetail/>
            <ProjectDetail/>
            <ProjectDetail/>
        </Slider> 
        </div> 
    );
}

export default Projects;