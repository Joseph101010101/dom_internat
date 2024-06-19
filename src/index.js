import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Document from "./components/Document.js";
import News from "./components/News.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderTop from "./components/HeaderTop.js";
import Contactus from "./components/Contactus.js";
import Cost from "./components/Cost.js";
import ZayavkaForm from "./components/ZayavkaForm.js";
import NewsMain from "./components/NewsMain.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderTop />
      <Routes>
        <Route path="/formazayavky" element={<ZayavkaForm />} />
        <Route path="https://pos.gosuslugi.ru" element={() => {
          window.location.href = "https://pos.gosuslugi.ru";
        }} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/document" element={<Document />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-main/:id" element={<NewsMain />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);