import "../styles/topProject.css";
function Toproject({ projectdata, imges }) {
  return (
    <div className="top-Projects">
      <div>
        <h1>ForestEnsitanal</h1>
        <p>DEscritpoin</p>
        <div>Icons</div>
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
