import "./App.css";
import TextForm from "./components/TextForm";

import Navbar from "./components/Navbar";
// const name = "preshit";
function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About us" />
      <div className="container my-3">
        <TextForm heading="Enter Text to Utilise" />
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
