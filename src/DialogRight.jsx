import "./styles.css";

export default function DialogRight({ show, setShow }) {
  return (
    <div className="dialog-right-container">
      <div className={show ? `dialog-right dialog-transform` : `dialog-right`}>
        <button className="close" onClick={() => setShow(false)}>
          x
        </button>
        <div className="dialog-content">This is the RIGHT dialog</div>
      </div>
    </div>
  );
}
