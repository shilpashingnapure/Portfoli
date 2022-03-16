import "../styles/topProject.css";
function Toproject({ projectdata, techStack, imges }) {
  return (
    <div className="top-Projects">
      <div>
        <h1>{projectdata}</h1>
        <p>Description:</p>
        <div className="techStack_div">
          {techStack.map((img) => {
            return (
              <div className="tech_stack">
                <img
                  src={require("../img/" + img)}
                  alt=""
                  width="35px"
                  height="35px"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="project-imges">
        <div
          className="card img-1"
          style={{ backgroundImage: `url(${require("../img/" + imges[0])})` }}
        ></div>
        <div
          className="card img-2"
          style={{ backgroundImage: `url(${require("../img/" + imges[1])})` }}
        ></div>
        <div
          className="card img-3"
          style={{ backgroundImage: `url(${require("../img/" + imges[2])})` }}
        ></div>
      </div>
    </div>
  );
}

export default Toproject;
