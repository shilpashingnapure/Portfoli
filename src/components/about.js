import "../styles/about.css";
function About() {
  return (
    <div class="container">
      <div class="container__image">
        <div class="container__info container__author">
          Photo by{" "}
          <a
            class="link"
            href="https://instagram.com/silvia.diaconescu"
            target="_blank"
          >
            Silvia Diaconescu
          </a>
        </div>
        <div class="container__info container__location">
          Geneva Lake Switzerland{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
