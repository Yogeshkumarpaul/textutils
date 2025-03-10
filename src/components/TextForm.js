import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleUpcase = () => {
    settext(text.toUpperCase());
    props.showalert("Converted to upper case successfully.", "success");
  };
  const handleLocase = () => {
    settext(text.toLowerCase());
    props.showalert("Converted to lower case successfully.", "success");
  };
  const handleClear = () => {
    settext("");
    props.showalert("Text cleared successfully.", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard successfully.", "success");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    console.log(newtext);
    settext(newtext.join(" "));
    props.showalert("Extra space removed successfully.", "success");
  };
  const handleOnChange = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "light" ? "black" : "white" }}
      >
        <div className="">
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="mybox"
              rows="8"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.Mode === "light" ? "white" : "gray",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpcase}>
            Convert to upper case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLocase}>
            Convert to lower case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>
            Clear text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra space
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.Mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
