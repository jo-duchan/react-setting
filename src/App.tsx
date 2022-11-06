import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Path from "Paths";
import { GlobalStyle } from "styles/common";

// Pages
import Home from "pages/home/Home";
import About from "pages/about/About";
import Error from "pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Error} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
