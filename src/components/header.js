import img from "../img/kem-hero.png";
function Header() {
  return (
    <div class="header">
      <div class="header--div1">
        <p class="header-hi">Hi there </p>
        <h1 class="header--name">Shilpa Shingnapure</h1>
        <h3 class="header--work">FULL STACK WEB DEVELOPER </h3>
        <p>
          I’m a professional UI/UX designer with front end <br />
          development skills based in Lagos.
        </p>
        <button class="btn">Contact me</button>
      </div>
      <div class="avtar_img">
        {/* <img src={img} alt="" /> */}
        <iframe
          height="300"
          // style="width: 100%;"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/shilpashingnapure/embed/abEbROq?result"
          // src="https://cdpn.io/pen/debug/abEbROq?authentication_hash=XBkGRNJKDGbA"
          frameborder="no"
          loading="lazy"
          data-default-tab="result"
          // allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen{" "}
          <a href="https://codepen.io/shilpashingnapure/pen/abEbROq">
            Untitled
          </a>{" "}
          by Shilpa Shingnapure (
          <a href="https://codepen.io/shilpashingnapure">@shilpashingnapure</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
  );
}

export default Header;
