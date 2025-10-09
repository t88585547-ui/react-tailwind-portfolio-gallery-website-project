import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbarcomponents";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import useDarkMode from "./hooks/useDarkMode";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [animating, setAnimating] = useState(false);
   const [fading, setFading] = useState(false);

   const handleToggleTheme = () => {
    setAnimating(true);
    setFading(true);

    // รอให้ ripple เล่นก่อน (1s)
    setTimeout(() => {
      toggleTheme();
      setAnimating(false);
    }, 1000);

    // ให้ fade transition ทำงานต่ออีกหน่อยก่อนเอาออก
    setTimeout(() => {
      setFading(false);
    }, 1800);
  };

  return (
    <div className={`${
        fading ? "transition-all duration-700 ease-in-out" : ""
      } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative`}>
      <Router>
        {/* Navbar ส่ง handleToggleTheme ให้ปุ่ม toggle */}
        <Navbar onToggleTheme={handleToggleTheme} theme={theme} />

        {/* Water Drop Animation Overlay */}
        {animating && (
          <div
            className="fixed pointer-events-none z-50 rounded-full scale-0 animate-ripple-gradient 
                dark:bg-[radial-gradient(circle,rgba(17,24,39,0.9),rgba(17,24,39,0.3),transparent)]
                bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0.3),transparent)]"
            style={{
              left: "50%",
              top: "50%",
              width: "20px",
              height: "20px",
              transform: "translate(-50%, -50%) scale(0)",
            }}
          ></div>
        )}

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
