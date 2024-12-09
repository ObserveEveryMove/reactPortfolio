import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./views/Layout";
import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

const App = () => {
  const [nightMode, setNightMode] = useState(
    localStorage.getItem("theme") === "false" ? false : true
  );

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "false") {
      setNightMode(false);
    } else {
      setNightMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", nightMode);
  }, [nightMode]);

  const handleNightDay = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={nightMode ? "dark" : null}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout nightMode={nightMode} handleNightDay={handleNightDay} />
            }
          >
            <Route index element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
