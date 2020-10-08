import React from 'react';
import { Link } from "react-router-dom";
import { Box, Toolbar } from "@material-ui/core";

function Navbar() {
  return (
    <Toolbar className='navbar' disableGutters={true}>
      <Box className='nav-container' flexDirection='column'>
          <Link className='top' to='/'>
            <h1>Medical Dater</h1>
          </Link>
          <Box className='nav-container bottom'>
            <Link to='/'>
              <h4>Home</h4>
            </Link>
            <Link to='/'>
              <h4>Inventory</h4>
            </Link>
          </Box>
        </Box>
    </Toolbar>
  )
}

export default Navbar;