import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header(props) {
  const { header } = props;
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{header.title}</h1>
      <div className={classes.links}>
        <NavLink to={header.link1.route} exact={true} className={classes.link}>
          {header.link1.text}
        </NavLink>

        <NavLink to={header.link2.route} exact={true} className={classes.link}>
          {header.link2.text}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
