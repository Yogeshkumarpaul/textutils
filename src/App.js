import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [Mode, SetMode] = useState("light");

  const togglemode = () => {
    if (Mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("dark mode enabled successfully", "warning");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode enabled successfully", "success");
    }

    // setInterval(() => {
    //   document.title = "textUtils is aamazing";
    // }, 1500);
    // setInterval(() => {
    //   document.title = "Install textUtils now";
    // }, 1000);
  };

  const [alert, setalert] = useState(null);

  const showalert = (message, msgtype) => {
    setalert({ msg: message, msgtype: msgtype });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="about TextUtils"
        Mode={Mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-8">
        <TextForm
          heading="Enter the text to analyze below"
          Mode={Mode}
          showalert={showalert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
