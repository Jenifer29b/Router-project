import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Topics from "./Components/Topics";
import "./App.css";
import Heading from "./Components/Heading";
import Blockchain from "./Components/Blockchain";
import Cloudcomputing from "./Components/Cloudcomputing";
import Fullstack from "./Components/Fullstack";
import Cyber from "./Components/Cyber";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>
          <center>React Router DOM Task</center>
        </h1>
        <Heading />

        <div className="link">
          <Link to="/">Trending Articles</Link>&nbsp;
          <Link to="/Blockchain">Blockchain</Link>&nbsp;
          <Link to="/Cloudcomputing">Cloud Computing</Link>&nbsp;
          <Link to="/FullStack">Full Stack Development</Link>&nbsp;
          <Link to="/Cyber">Cyber Security</Link>&nbsp;
        </div>

        <Routes>
          <Route path="/" element={<Topics />}></Route>
          <Route path="/Blockchain" element={<Blockchain />}></Route>
          <Route path="/Cloudcomputing" element={<Cloudcomputing />}></Route>
          <Route path="/FullStack" element={<Fullstack />}></Route>
          <Route path="/Cyber" element={<Cyber />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
