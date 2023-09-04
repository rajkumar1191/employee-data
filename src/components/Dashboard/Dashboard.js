import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./../Sidebar/SidebarMenu";

const Dash = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={2} lg={2}>
            <Sidebar id="sidebar-wrapper" />
          </Col>
          <Col sm={12} md={10} lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Dashboard = Dash;
export default Dashboard;
