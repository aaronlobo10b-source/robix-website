import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ModelViewerBot from "./components/ModelViewerBot";
import InfiniteScrollEvents from "./components/InfiniteScrollEvents";
import CarouselSponsors from "./components/CarouselSponsors";
import LanyardMembers from "./components/LanyardMembers";
import CustomCursor from "./components/CustomCursor";
import NeonSidebar from "./components/NeonSidebar";

// Data imports
import events from "./data/events.json";
import projects from "./data/projects.json";
import sponsors from "./data/sponsors.json";
import members from "./data/members.json";

function Layout({ children }) {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  const tronBackground = {
    color: "#e0e0e0",
    background: "radial-gradient(circle at bottom, #2b2b2b 0%, #1a1a1a 80%)",
    padding: "60px 20px",
    minHeight: "100vh",
    fontFamily: "VT323, monospace",
    overflowY: "auto",
    position: "relative",
  };

  const footerStyle = {
    position: "fixed",
    bottom: "10px",
    left: "20px",
    fontSize: "1.2rem",
  };

  return (
    <div style={tronBackground}>
      <CustomCursor />
      {showSidebar && <NeonSidebar />}
      <div className="page-wrapper">{children}</div>
      <footer style={footerStyle}>© 2025 ROBIX CRCE. All Rights Reserved.</footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModelViewerBot modelUrl="/r2d2.glb" />} />

      <Route
        path="/events"
        element={
          <Layout>
            <h2>Events</h2>
            <InfiniteScrollEvents items={events} />
          </Layout>
        }
      />

      <Route
        path="/projects"
        element={
          <Layout>
            <h2>Projects</h2>
            <InfiniteScrollEvents items={projects} />
          </Layout>
        }
      />

      <Route
        path="/sponsors"
        element={
          <Layout>
            <h2>Our Sponsors</h2>
            <CarouselSponsors sponsors={sponsors} />
          </Layout>
        }
      />

      <Route
        path="/team"
        element={
          <Layout>
            <LanyardMembers members={members} />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
