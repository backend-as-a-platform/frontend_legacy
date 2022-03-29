import { useState } from 'react';
import { Container, Nav, Navbar as NavBar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import logo from '/public/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed>
      <Container>
        <NavBar.Brand>
          <Link className="navbar-brand" to="/">
            <img src={logo} width="27" height="34" alt="BaaP logo" />
            <h3 className="d-inline align-middle pb-1 text-success">BaaP</h3>
          </Link>
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="responsive-navbar-nav" />
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={`nav-link${
                location.pathname === '/forms' ? ' active' : ''
              }`}
              to="/forms"
            >
              Forms
            </Link>
            <Link
              className={`nav-link${
                location.pathname === '/about' ? ' active' : ''
              }`}
              to="/about"
            >
              Why
            </Link>
            <Link
              className={`nav-link${
                location.pathname === '/docs' ? ' active' : ''
              }`}
              to="/docs"
            >
              Docs
            </Link>
          </Nav>
          <Nav>
            <Link
              className="nav-link"
              to="#"
              onClick={(e) => setShowLogin(true)}
            >
              Login
            </Link>
            <Link
              className="nav-link"
              to="#"
              onClick={(e) => setShowSignup(true)}
            >
              Signup
            </Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
      <Login show={showLogin} hide={(e) => setShowLogin(false)} />
      <Signup show={showSignup} hide={(e) => setShowSignup(false)} />
    </NavBar>
  );
};

export default Navbar;
