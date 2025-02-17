import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer1 from "./components/Mobile_footer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NormalRegistration from "./pages/NormalRegistration";
import EventsPage from "./pages/EventsPage";
import OurTeams from "./pages/OurTeams";
import Sponsors from "./pages/Sponsors";
import ActualSponsors from "./pages/ActualSponsors";
import Page404 from "./pages/404";

const aws = import.meta.env.VITE_AWS;
const StartLoader = `${aws}/StartLoader.gif`;
const Preloader = `${aws}/PreLoader.gif`;
const MobileStartLoader = `${aws}/MobileStartLoader.gif`;

function DialogBox({ text, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000); // Automatically close after 4 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#DF9F23",
          padding: "2%",
          width: "70%",
          height: "50%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="border-[2px] border-black"
      >
        <p
          style={{
            marginBottom: "16px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          className="font-rfabb p-[2%]"
        >
          {text}
        </p>
        <button
          onClick={onClose}
          style={{
            padding: "10px 20px",
            backgroundColor: "#DF9F23",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          className="border-2 border-black"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function AppContent() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();

  // Check screen size and session storage for dialog box
  useEffect(() => {
    const hasDialogBeenShown = sessionStorage.getItem("hasDialogBeenShown");

    // Show dialog only if it hasn't been shown before and screen size is small
    if (!hasDialogBeenShown && window.innerWidth < 768) {
      setShowDialog(true);
      sessionStorage.setItem("hasDialogBeenShown", "true");
    }
  }, []);

  // Durations for the loaders
  const startLoaderDuration = 6000;
  const preloaderDuration = 4100;

  useEffect(() => {
    const count = sessionStorage.getItem("loadCount") || 0;
    if (parseInt(count, 10) === 0) {
      setIsFirstLoad(true);
      sessionStorage.setItem("loadCount", 1);
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("loadCount", 2);
      }, startLoaderDuration);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    const count = sessionStorage.getItem("loadCount");
    if (parseInt(count, 10) >= 2) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), preloaderDuration);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  if (isFirstLoad) {
    return (
      <div className="loader-container">
        <img
          src={StartLoader}
          alt="Start Loading..."
          className="loader lg:block hidden"
        />
        <img
          src={MobileStartLoader}
          alt="Loading..."
          className="loaderMob lg:hidden block"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loader-container full-screen">
        <img src={Preloader} alt="Loading..." className="loader" />
      </div>
    );
  }

  return (
    <div>
      {showDialog && (
        <DialogBox
          text="For better experience, visit website on desktop."
          onClose={() => setShowDialog(false)}
        />
      )}
      {location.pathname === "/" || location.pathname === "/events" ? (
        <div className="hidden"></div>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/NormalRegistration" element={<NormalRegistration />} />
        <Route path="/OurTeam" element={<OurTeams />} />
        <Route path="/Sponsors" element={<ActualSponsors />} />
        <Route path="/Netra" element={<Sponsors />} />
        <Route path="/Spotify" element={<Sponsors />} />
        <Route path="/AppleMusic" element={<Sponsors />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <div className="block sm:hidden">
        <Footer1 />
      </div>
      <div className="hidden sm:block">
        {location.pathname === "/events" ? null : <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
