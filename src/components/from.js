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
            className="arrow-btn"
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            arrow
          </button>
        </form>
      </div>
      <div className="form-side form-back">
        <form>
          <textarea></textarea>
          <button
            className="arrow-btn"
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            arrow
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
