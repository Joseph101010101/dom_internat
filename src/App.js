import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import SomeForms from "./components/SomeForms";
import PosGosUslugi from "./components/PosGosUslugi";
import Newsblock from "./components/Newsblock";
import MainTask from "./components/MainTask";
import NotFree from "./components/NotFree";
import Contact from "./components/Contact";
import Document from "./components/Document.js";
import News from "./components/News.js";
import Contactus from "./components/Contactus.js";
import Cost from "./components/Cost.js";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <SomeForms />
      <PosGosUslugi />
      <Newsblock />
      <MainTask />
      <NotFree />
      <Contact />
      <Routes>
        <Route path="https://pos.gosuslugi.ru" element={() => {
          window.location.href ="https://pos.gosuslugi.ru"
        }}/>
        <Route path="/cost" element={<Cost />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/document" element={<Document />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
