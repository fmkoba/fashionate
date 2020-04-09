import React, { useState } from 'react';
import { Link } from 'gatsby';

import Header from '../Header';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import './MainNavigation.scss';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} show={drawerIsOpen}/>}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span/>
          <span/>
          <span/>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Fashionate</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;