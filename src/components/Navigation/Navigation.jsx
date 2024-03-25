import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkCss = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkCss}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkCss}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
