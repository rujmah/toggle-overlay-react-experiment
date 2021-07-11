import { useState } from "react";
import DialogRight from "./DialogRight";
import DialogTop from "./DialogTop";
import "./styles.css";

export default function DialogWrapper({ dialogType }) {
  const [show, setShow] = useState(false);
  return (
    <div className="dialog-right-container">
      <div className="toggle-container">
        <button onClick={() => setShow(true)}>Toggle {dialogType}</button>
      </div>
      {show && <div className="overlay" onClick={() => setShow(false)}></div>}
      {dialogType === "top" && <DialogTop show={show} setShow={setShow} />}
      {dialogType === "right" && <DialogRight show={show} setShow={setShow} />}
    </div>
  );
}
