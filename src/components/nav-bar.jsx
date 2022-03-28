import { Container, Nav, Navbar as NavBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/public/logo.png';

const Navbar = () => (
  <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
              window.location.pathname === '/forms/new' ? ' active' : ''
            }`}
            to="/forms/new"
          >
            Why Baap?
          </Link>
          <Link
            className={`nav-link${
              window.location.pathname === '/about' ? ' active' : ''
            }`}
            to="/about"
          >
            Docs
          </Link>
        </Nav>
        <Nav>
          <Link
            className={`nav-link${
              window.location.pathname === '/login' ? ' active' : ''
            }`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`nav-link${
              window.location.pathname === '/signup' ? ' active' : ''
            }`}
            to="/signup"
          >
            Signup
          </Link>
        </Nav>
      </NavBar.Collapse>
    </Container>
  </NavBar>
);

export default Navbar;
