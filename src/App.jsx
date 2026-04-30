import React from "react";
import Main from "./components/Main";
import "./styles.css";

export default function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsStarted(true);
    });
  };

  return (
    <div className="App">
      {!isStarted ? (
        <div
          className={`intro-container ${isExiting ? "fade-out" : "fade-in"}`}
        >
          <h1>I am Shri</h1>
          <p>A developer</p>
          <button onClick={handleStart}>Continue</button>
        </div>
      ) : (
        <div className="fade-in">
          <Main />
        </div>
      )}
    </div>
  );
}
