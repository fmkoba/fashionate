import React, { useState } from 'react';
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
    <>
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
        <span className="main-navigation__menu-logo">FASHIONATE</span>
        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
      </Header>
    </>
  );
};

export default MainNavigation;