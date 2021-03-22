import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";



// Define reducer

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });
  

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' exact >
              ms
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/about-us' exact >
              About
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/webservices' exact >
              Services
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/imgslider' exact >
              Why Us
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/approach' >
              Awards
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/services' exact >
              Clients
            </NavLink>
          </div>
          <div className='logo'>
            <NavLink to='/Form' exact >
              Contact
            </NavLink>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
