import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from "./components/About";
// const name = "preshit";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter Text to Utilise"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <About /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
