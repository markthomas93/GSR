import React  from "react";
import { Link} from "react-router-dom";
import { Navbar, Nav,} from "react-bootstrap";

export const NavbarOne = () => {
  
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "300	px" }}>
          <Nav.Link as={Link} to="/login" className="text-warning">
            ACCEDE
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/todo"
            className="text-warning"
           >
            LISTA DE TAREAS
          </Nav.Link>
        </Nav>
     </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarOne;