import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="App">
        <h1>Toggle overlay</h1>
        <div className="toggle-container">
          <button onClick={() => setShow(true)}>Toggle</button>
        </div>
      </div>
      {show && <div className="overlay" onClick={() => setShow(false)}></div>}
      <div className={show ? `dialog dialog-transform` : `dialog`}>
        <button className="close" onClick={() => setShow(false)}>
          x
        </button>
        <div className="dialog-content">This is the dialog</div>
      </div>
    </>
  );
}
