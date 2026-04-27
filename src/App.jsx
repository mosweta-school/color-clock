import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="clock-card">
        <h1 className="title">⏰ Color Clock</h1>

        <p className="date">
          {format(time, "EEEE, MMMM do yyyy")}
        </p>

        <p className="time">
          {format(time, "HH:mm:ss")}
        </p>
      </div>
    </div>
  );
}

export default App;