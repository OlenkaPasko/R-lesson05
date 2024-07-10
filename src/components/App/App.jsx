import css from "./App.module.css";
import { Link, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Prifile</Link>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/profile" element={<div>Profile page</div>} />
      </Routes>
    </div>
  );
}
