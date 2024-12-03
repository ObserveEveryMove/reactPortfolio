import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import 'animate.css'

import Layout from "./views/Layout";
import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

const App = () => {
  const [nightMode, setNightMode] = useState(localStorage.getItem("theme") === "true" ? true : false);

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "true") {
      setNightMode(true);
    }else {
      setNightMode(false)
    }
    console.log(mode)
  },[]);

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
            <Route index element={<About nightMode={nightMode} />} />

            <Route
              path="/contact"
              element={<Contact nightMode={nightMode} />}
            />

            <Route
              path="/projects"
              element={<Projects nightMode={nightMode} />}
            />

            <Route path="/skills" element={<Skills nightMode={nightMode} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
