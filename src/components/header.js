function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi" data-aos={"fade-left"}>
          Hi there{" "}
        </p>
        <h1 className="header--name" data-aos={"fade-right"}>
          Shilpa Shingnapure
        </h1>
        <h3 className="header--work" data-aos={"fade-left"}>
          FULL STACK WEB DEVELOPER{" "}
        </h3>
        <p data-aos={"zoom-in"}>
          I’m a MERN stack developer with the
          <br />
          development skills based in Mumbai.
        </p>
        <button className="btn">Contact me</button>
      </div>
      <div className="avtar_img" data-aos={"zoom-in"}>
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
