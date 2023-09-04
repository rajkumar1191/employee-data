import Nav from "react-bootstrap/Nav";
import "./TabsSideMenu.css";

export default function TabsSideMenu() {
  const menuItem = [
    {
      name: "All Employee",
      key: "allEmployee",
    },
    {
      name: "BOD",
      key: "bod",
    },
    {
      name: "Advisors",
      key: "advisors",
    },
    {
      name: "Independent Contractor",
      key: "ic",
    },
    {
      name: "Others",
      key: "others",
    },
  ];

  return (
    <>
      <Nav variant="tab" className="flex-column bg-body-tertiary tabsSideMenu">
        {menuItem.map((menu) => {
          return (
            <Nav.Item key={menu.key}>
              <Nav.Link eventKey={menu.key}>{menu.name}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
      <Nav variant="tab" className="flex-row bg-body-tertiary tabsSideMobileMenu">
        {menuItem.map((menu) => {
          return (
            <Nav.Item key={menu.key}>
              <Nav.Link eventKey={menu.key}>{menu.name}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
}
