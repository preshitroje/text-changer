import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("UpperCase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    // console.log("UpperCase clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
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
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border border-secondary"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleLowClick}
        >
          LowerCase
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleExtraSpace}
        >
          Remove ExtraSpace
        </button>
        <button className="btn btn-outline-success mx-2" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-outline-success mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} characters{" "}
        </p>
        <p>Time {0.008 * text.split(" ").length} Minites to Read</p>
        <h3>Privew</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
