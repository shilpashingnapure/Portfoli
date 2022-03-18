function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi">Hi there </p>
        <h1 className="header--name">Shilpa Shingnapure</h1>
        <h3 className="header--work">FULL STACK WEB DEVELOPER </h3>
        <p>
          I’m a professional UI/UX designer with front end <br />
          development skills based in Lagos.
        </p>
        <button className="btn">Contact me</button>
      </div>
      <div className="avtar_img">
        {/* <img src={img} alt="" /> */}
        <iframe
          height="300"
          // style="width: 100%;"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/shilpashingnapure/embed/abEbROq?result"
          // src="https://cdpn.io/pen/debug/abEbROq?authentication_hash=yPkJjbdKGaEk"
          frameBorder="no"
          loading="lazy"
          data-default-tab="result"
          // allowtransparency="true"
          allowFullScreen={true}
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
