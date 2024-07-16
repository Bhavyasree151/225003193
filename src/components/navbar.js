import React from 'eact';
import { Link } from 'eact-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Product Catalog
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;