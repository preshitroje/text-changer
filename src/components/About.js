import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnTxt, setBtnTxt] = useState("Dark Mode");

  const changeDarkMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      //backgroundColor: "white";
      setBtnTxt("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        // border: "2px solid black",
      });
      setBtnTxt("Dark Mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">Aboout Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h6>About this web</h6>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                I created a React app for text utilities that provides users
                with a set of helpful features to format and manipulate text.
                The app allows users to convert normal text to uppercase,
                lowercase, remove extra spaces, copy text to the clipboard, and
                delete text. The goal of the project was to create a tool that
                could make it easier for users to perform common text formatting
                tasks in a simple and user-friendly way.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6>Privacy Policy</h6>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                We want to assure you that we do not save or store any of the
                text that you input into our app. We believe that your text is
                your own personal information and should remain private.
                Therefore, we have implemented measures to ensure that your text
                is not collected or used for any purpose.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6>About Me</h6>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                I have gained expertise in c/c++ programming, MySQL and MongoDB
                databases, data structure and algorithms, frontend development
                using HTML, CSS, and JS, and backend using NodeJS, and for
                frontend React.JS
                <br />
                <a href="https://www.linkedin.com/in/preshit-roje-819933220/">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
