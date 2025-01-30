import HeartCheckbox from "./c/co";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="section">
        <h3>First Section</h3>
        <HeartCheckbox />
      </div>

      <div className="section">
        <h3>Second Section</h3>
        <HeartCheckbox />
      </div>

      <div className="section">
        <h3>Third Section</h3>
        <HeartCheckbox />
      </div>
    </div>
  );
};

export default App;
