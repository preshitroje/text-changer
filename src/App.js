import "./App.css";
import TextForm from "./components/TextForm";

import Navbar from "./components/Navbar";
import About from "./components/About";
// const name = "preshit";
function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About us" />
      <div className="container my-3">
        <TextForm heading="Enter Text to Utilise" />
      </div>
      {/* <About /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
