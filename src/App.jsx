import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State management
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [editingField, setEditingField] = useState(null); // 'hours', 'minutes', or 'seconds'
  const [editValue, setEditValue] = useState(""); // Value being edited

  // useEffect for countdown logic
  useEffect(() => {
    let timer = null;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false); // Stop when time reaches 0
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Convert time in seconds to hours, minutes, and seconds
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { hours, minutes, seconds };
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleFieldClick = (field) => {
    setIsRunning(false); // Stop timer while editing
    setEditingField(field);
    const timeObject = formatTime();
    setEditValue(timeObject[field]);
  };

  const handleEditChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and max two digits
    if (/^\d{0,2}$/.test(value)) {
      setEditValue(value);
    }
  };

  const handleEditSubmit = () => {
    const timeObject = formatTime();
    let newTimeInSeconds = time;
    
    if (editingField === "hours") {
      newTimeInSeconds =
        (parseInt(editValue || "0") * 3600) +
        timeObject.minutes * 60 +
        timeObject.seconds;
    } else if (editingField === "minutes") {
      newTimeInSeconds =
        timeObject.hours * 3600 +
        (parseInt(editValue || "0") * 60) +
        timeObject.seconds;
    } else if (editingField === "seconds") {
      newTimeInSeconds =
        timeObject.hours * 3600 +
        timeObject.minutes * 60 +
        parseInt(editValue || "0");
    }

    setTime(newTimeInSeconds);
    setEditingField(null);
  };

  const { hours, minutes, seconds } = formatTime();

  return (
    <div
      style={{
        backgroundColor: "#2c3e50",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "#34495e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          padding: "20px",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "24px", color: "#ecf0f1", marginBottom: "20px" }}>
          {editingField === "hours" ? (
            <input
              type="text"
              value={editValue}
              onChange={handleEditChange}
              onBlur={handleEditSubmit}
              autoFocus
              style={{ width: "30px", textAlign: "center" }}
            />
          ) : (
            <span onClick={() => handleFieldClick("hours")}>
              {String(hours).padStart(2, "0")}
            </span>
          )}
          :
          {editingField === "minutes" ? (
            <input
              type="text"
              value={editValue}
              onChange={handleEditChange}
              onBlur={handleEditSubmit}
              autoFocus
              style={{ width: "30px", textAlign: "center" }}
            />
          ) : (
            <span onClick={() => handleFieldClick("minutes")}>
              {String(minutes).padStart(2, "0")}
            </span>
          )}
          :
          {editingField === "seconds" ? (
            <input
              type="text"
              value={editValue}
              onChange={handleEditChange}
              onBlur={handleEditSubmit}
              autoFocus
              style={{ width: "30px", textAlign: "center" }}
            />
          ) : (
            <span onClick={() => handleFieldClick("seconds")}>
              {String(seconds).padStart(2, "0")}
            </span>
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={handleStartPause}
            style={{
              backgroundColor: "#2980b9",
              color: "#ecf0f1",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: "#c0392b",
              color: "#ecf0f1",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
