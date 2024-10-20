import { NavLink } from 'react-router-dom';
import navCss from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(navCss.link, isActive && navCss.isActive);
};

const Navigation = () => {
  return (
    <nav className={navCss.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movie" className={buildLinkClass}>
        Movie
      </NavLink>
    </nav>
  );
};

export default Navigation;
