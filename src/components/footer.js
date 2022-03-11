import Form from "./from";
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
          <span>Linkendin</span>
          <span>Twitter</span>
          <span>Github</span>
        </div>
        <h3>Made by</h3>
        <div className="topDiv">
          <a href="/">Top</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
