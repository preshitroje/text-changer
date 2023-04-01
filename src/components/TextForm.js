import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("All characters chaged to UPPERCASE", "success");
  };

  const handleLowClick = () => {
    // console.log("UpperCase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("All characters chaged to LOWERCASE", "success");
  };

  const handleClear = () => {
    // console.log("UpperCase clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("TextArea Cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copiped to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Space Removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "state update"; --> wrong
  //   setText("State updated");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "#808080",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control border border-secondary"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-success mx-2 my-2"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-success mx-2 my-2"
          onClick={handleLowClick}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-success mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove ExtraSpace
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-success mx-2 my-2"
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-success mx-2 my-2"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#808080",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters{" "}
        </p>
        <p>
          Time{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minites to Read
        </p>
        <h3>Privew</h3>
        <p>{text.length > 0 ? text : "Enter text to privew....."}</p>
      </div>
    </>
  );
}
