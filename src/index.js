import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Document from "./components/Document.js";
import News from "./components/News.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Form, Route, Router, Routes } from "react-router-dom";
import HeaderTop from "./components/HeaderTop.js";
import Contactus from "./components/Contactus.js";

import Cost from "./components/Cost.js";
import ZayavkaForm from "./components/ZayavkaForm.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderTop />
      <Routes>
      <Route path="/formazayavky" element={<ZayavkaForm/>}/>
      <Route path="https://pos.gosuslugi.ru" element={() => {
          window.location.href ="https://pos.gosuslugi.ru"
        }}/>
        <Route path="/cost" element={<Cost />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/" element={<App />} />
        <Route path="/document" element={<Document />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
