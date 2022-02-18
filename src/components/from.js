import { useEffect, useState } from "react";
import "../styles/form.css";
function Form() {
  const [turn, setturn] = useState(false);
  console.log(turn);
  return (
    <div className={turn ? "form form-face" : "form"}>
      <div className="form-side form-front">
        <form>
          <input type="text" />
          <input type="text" />
          <button
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            Msg
          </button>
        </form>
      </div>
      <div className="form-side form-back">
        <form>
          <textarea></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
