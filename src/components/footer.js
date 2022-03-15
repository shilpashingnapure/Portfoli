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
                class="change-my-color"
                src="https://www.svgrepo.com/show/128403/linkedin.svg"
                width="30px"
                height="30px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/shilpashingnapure" target="_blank">
              <img
                src="https://www.svgrepo.com/show/325236/github.svg"
                width="30px"
                height="30px"
                alt=""
                class="change-my-color"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.hackerrank.com/shingnapureshil1"
              target="_blank"
            >
              <img
                class="change-my-color"
                // src="https://www.svgrepo.com/show/314107/hackerrank.svg"
                src="https://www.svgrepo.com/show/341892/hackerrank.svg"
                width="30px"
                height="30px"
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
                class="change-my-color"
                src="https://www.svgrepo.com/show/341985/leetcode.svg"
                width="30px"
                height="30px"
                alt=""
              />
            </a>
          </span>

          <span>
            <a href="https://cssbattle.dev/player/shilpa17" target="_blank">
              <img
                class="change-my-color"
                src="https://pixabay.com/get/g6c165fab4273b15c09b9ff4c7cdd83586b88973c94bd7128275cf7dcd9731c298b9a3651b7c9750415f95b8e5b7050f2.svg"
                width="30px"
                height="30px"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="https://codepen.io/shilpashingnapure" target="_blank">
              <img
                class="change-my-color"
                src="https://www.svgrepo.com/show/368609/codepen.svg"
                width="30px"
                height="30px"
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
          <a href="#top">
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
