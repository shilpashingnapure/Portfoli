import { useEffect, useState } from "react";
import "../styles/form.css";
function Form() {
  const [turn, setturn] = useState(false);
  console.log(turn);
  return (
    <div className={turn ? "form form-face" : "form"}>
      <div className="form-side form-front">
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Name" />
          <label>Email:</label>
          <input type="text" placeholder="Email" />
          <button
            className="arrow-btn right--btn"
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            <img
              src="https://www.downloadclipart.net/medium/16161-right-arrow-clip-art.png"
              width="46px"
              height="46px"
              alt=""
            />
          </button>
        </form>
      </div>
      <div className="form-side form-back">
        <form>
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Send" />
          <button
            className="arrow-btn left--btn"
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            <img
              src="https://www.downloadclipart.net/medium/16161-right-arrow-clip-art.png"
              width="46px"
              height="46px"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
