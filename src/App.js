import DialogWrapper from "./DialogWrapper";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Toggle overlay</h1>
        <DialogWrapper dialogType="right" />
        <DialogWrapper dialogType="top" />
      </div>
    </>
  );
}
