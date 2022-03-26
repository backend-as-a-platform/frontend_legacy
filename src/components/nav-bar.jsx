import { Container, Nav, Navbar as NavBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/public/logo.png';

const Navbar = () => (
  <NavBar bg="success" variant="dark" expand="lg">
    <Container>
      <NavBar.Brand>
        <Link className="navbar-brand" to="/">
          <img src={logo} width="27" height="34" alt="BaaP logo" />
          <h3 className="d-inline align-middle pb-1">BaaP</h3>
        </Link>
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link
            className={`nav-link${
              window.location.pathname === '/forms/new' ? ' active' : ''
            }`}
            to="/forms/new"
          >
            Create new form
          </Link>
        </Nav>
      </NavBar.Collapse>
    </Container>
  </NavBar>
);

export default Navbar;
