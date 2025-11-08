import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short "system boot" animation (2.5s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="boot-screen">
          <h1 className="boot-text">INITIALIZING SYSTEM...</h1>
        </div>
      ) : (
        // ✅ Enable navigation across pages
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
