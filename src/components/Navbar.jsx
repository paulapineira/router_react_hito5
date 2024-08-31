import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <Nav className="navbar">
      <div className="d-flex align-items-center">
        <span className="navbar-title">Pizzería Mamma Mía!</span>
        <div className="nav-buttons d-flex">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="outline-light" className="mx-2">
              🍕Home
            </Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <Button variant="outline-light" className="mx-2">
                  Profile
                </Button>
              </Link>
                <Button variant="outline-light" className="mx-2">
                  Logout
                </Button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="outline-light" className="mx-2">
                  🔒Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="outline-light" className="mx-2">
                  🔒Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Link to="/cart" style={{textDecoration: 'none'}}>
      <Button variant="outline-light" className="total-button">
        🛒 Total: {total.toLocaleString()}
      </Button>
      </Link>
    </Nav>
  );
};

export default Navbar;

