import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

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
      <div className="container">
        <Router>
          <Navbar
            title="TextUtils"
            mode={mode}
            aboutText="About us"
            toggleMode={toggleMode}
            // toggleMode={handleOnChange}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    heading="Enter the text to analyze below"
                    showAlert={showAlert}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </div>

      {/* <About /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
