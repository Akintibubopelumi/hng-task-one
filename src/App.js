import React from "react";
import Home from "./Home";
import Contact from "./contact";
import {Route, Routes } from "react-router-dom";

function App (){
  return(
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  )
}

export default App;
