import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const MobileSidebar = ({ community, expanded, setExpanded, routeData }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      className="bg-body-tertiary mobileMenu"
      onToggle={() => setExpanded(expanded ? false : "expanded")}
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={community} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav lgMenu" className="sidenav">
          <img src={community} alt="logo" className="logo" />

          <Nav className="me-auto menu" onSelect={() => setExpanded(false)}>
            {routeData &&
              routeData.map((item, index) => {
                return (
                  <Link
                    to={item.linkPath}
                    className="menu-link"
                    onClick={() => setExpanded(false)}
                    key={index}
                  >
                    {item.linkName}
                  </Link>
                );
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MobileSidebar;
