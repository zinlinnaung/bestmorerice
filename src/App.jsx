import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [dots, setDots] = useState("");

  // Animated "Loading..." dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="under-construction">
      <div className="content">
        <img
          src="/rice.jpg"
          alt="Logo"
          className="logo"
          width={200}
          height={100}
        />
        <h1>🚧 Site Under Construction 🚧</h1>
        <p>
          We’re working hard to bring you something amazing.
          <br />
          Please check back soon!
        </p>
        <div className="progress-bar">
          <div className="progress-fill" />
        </div>
        <p className="loading">Loading{dots}</p>
      </div>
      <footer>
        © {new Date().getFullYear()} bestmorerice.com — All Rights Reserved
      </footer>
    </div>
  );
}
