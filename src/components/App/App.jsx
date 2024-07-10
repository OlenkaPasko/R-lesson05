import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Navigation/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/profile" element={<div>Profile page</div>} />
      </Routes>
    </div>
  );
}
