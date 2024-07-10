import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={makeNavLinkClass}>
          About
        </NavLink>
        <NavLink to="/profile" className={makeNavLinkClass}>
          Prifile
        </NavLink>
      </nav>
    </header>
  );
}
