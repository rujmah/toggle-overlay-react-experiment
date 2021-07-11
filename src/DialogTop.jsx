import "./styles.css";

export default function DialogTop({ show, setShow }) {
  return (
    <div className="dialog-top-container">
      <div className={show ? `dialog-top dialog-top-transform` : `dialog-top`}>
        <button className="close" onClick={() => setShow(false)}>
          x
        </button>
        <div className="dialog-content">This is the TOP dialog</div>
      </div>
    </div>
  );
}
