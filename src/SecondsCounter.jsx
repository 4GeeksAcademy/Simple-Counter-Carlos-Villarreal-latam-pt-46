import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";

const SecondsCounter = ({ initialSeconds = 0, countdown = false, alertTime }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (countdown && prev === 0) {
          clearInterval(interval);
          return 0;
        }
        if (alertTime !== undefined && prev === alertTime) {
          alert(`Tiempo alcanzado: ${alertTime} segundos`);
        }
        return countdown ? prev - 1 : prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, countdown, alertTime]);

  return (
    <div style={{ fontSize: "2rem", display: "flex", alignItems: "center" }}>
      <i className="fas fa-clock" style={{ marginRight: "10px" }}></i>
      {seconds}
      <button onClick={() => setIsRunning(!isRunning)} style={{ marginLeft: "10px" }}>
        {isRunning ? "Pausar" : "Reanudar"}
      </button>
      <button onClick={() => { setSeconds(initialSeconds); setIsRunning(true); }} style={{ marginLeft: "10px" }}>
        Reiniciar
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondsCounter initialSeconds={0} countdown={false} alertTime={10} />);