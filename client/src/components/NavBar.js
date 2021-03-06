import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () =>
  <div className="navbar">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/quotes"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Quotes</NavLink>
    <NavLink
      to="/characters"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Characters</NavLink>
    <NavLink
      to="/characters/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >New Character</NavLink>
    <NavLink
      to="/all"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >All</NavLink>
  </div>;

export default NavBar;
