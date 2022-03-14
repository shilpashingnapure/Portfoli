import Form from "./from";
import "../styles/footer.css";
function Footer() {
  return (
    <div class="footer">
      <div class="stack-header">
        <p class="highlight">To connect with me</p>
        <h2 class="head">Contact me</h2>
      </div>
      <Form />
      <div class="footer__div">
        <div>
          <span>
            <a
              href="https://www.linkedin.com/in/shilpa-shingnapure/"
              target="_blank"
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-round.png"
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/shilpashingnapure" target="_blank">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width="40px"
                height="40px"
                alt=""
              /> */}

              <img
                src="https://img.icons8.com/carbon-copy/100/ffffff/github.png"
                width="65px"
                height="65px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.hackerrank.com/shingnapureshil1"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/480px-HackerRank_Icon-1000px.png"
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a
              href="https://leetcode.com/shingnapure_shilpa17/"
              target="_blank"
            >
              <img
                src="https://www.coderssb.com/Resources/leetcode-logo.png"
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </span>

          <span>
            <a href="https://cssbattle.dev/player/shilpa17" target="_blank">
              <img
                src="https://pbs.twimg.com/profile_images/1114446136302084096/BIu19jPP_400x400.png"
                width="40px"
                height="40px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="https://codepen.io/shilpashingnapure" target="_blank">
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-32-512.png"
                width="45px"
                height="45px"
                alt=""
              />
            </a>
          </span>
        </div>
        <div class="credit">
          <span>Made by</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
            alt=""
            width="25px"
            height="25px"
          />
          <span>Shilpa Shingnapure</span>
        </div>
        <div className="topDiv">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP_IqIxI2RoBhbIlY7GnRRE6h64Wv2MrjVVWYJGQYIoh0rjT1mGeEixSHQ9pKPkJtY8U&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
