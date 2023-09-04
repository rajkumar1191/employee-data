import { Tab, Col, Row, Button } from "react-bootstrap";
import { data } from "../../data.js";
import "./People.css";
import TabsSideMenu from "./../TabsSideMenu/TabsSideMenu";
import Questionare from "../Questionare/Questionare.js";
import TabsMainContent from "../TabsMainContent/TabsMainContent.js";
import { useState } from "react";
import backarrow from './../../assets/backarrow.png'

export default function People() {
  const [formSubmitted, setFormSubmit] = useState(false);
  return (
    <>
      {!formSubmitted && <Questionare setFormSubmit={setFormSubmit} />}
      {formSubmitted && (
        <>
          <Button
            variant="outline"
            type="submit"
            className="backBtn"
            onClick={() => setFormSubmit(false)}
          >
            <img src={backarrow} alt="arrow" className="backarrow" /> Back
          </Button>
          <Tab.Container id="left-tabs-example" defaultActiveKey="allEmployee">
            <Row>
              <Col xs={12} sm={12} lg={3}>
                <TabsSideMenu />
              </Col>
              <Col xs={12} sm={12} lg={9}>
                <TabsMainContent data={data} />
              </Col>
            </Row>
          </Tab.Container>
        </>
      )}
    </>
  );
}
