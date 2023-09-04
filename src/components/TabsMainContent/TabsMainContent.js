import IndividualData from "./../IndividualData/IndividualData";
import { Tab, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

const TabsMainContent = ({ data }) => {
  return (
    <>
      <Tab.Content>
        <Tab.Pane className="personData" eventKey="allEmployee">
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey={data && data[0] ? "#" + data[0].id : null}
          >
            <Row>
              <Col xs={12} sm={12} lg={3}>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Select Person"
                  variant="dark"
                >
                  {data &&
                    data.map((personData, index) => {
                      return (
                        <Dropdown.Item key={index} href={"#" + personData.id}>
                          {personData.name}
                        </Dropdown.Item>
                      );
                    })}
                </DropdownButton>
              </Col>
              <Col xs={12} sm={12} lg={9}>
                <Tab.Content>
                  {data &&
                    data.map((personData, index) => {
                      return (
                        <Tab.Pane
                          key={personData.id}
                          eventKey={"#" + personData.id}
                        >
                          <IndividualData data={personData} />
                        </Tab.Pane>
                      );
                    })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab.Pane>
        <Tab.Pane eventKey="bod">BOD content</Tab.Pane>
        <Tab.Pane eventKey="advisors">Advisors content</Tab.Pane>
        <Tab.Pane eventKey="ic">IC content</Tab.Pane>
        <Tab.Pane eventKey="others">Others content</Tab.Pane>
      </Tab.Content>
    </>
  );
};
export default TabsMainContent;
