import { Card, Accordion, Button } from "react-bootstrap";
import ContextAwareToggle from "../ContextAwareToggle/ContextAwareToggle";

const RenderIndividualData = ({ title, ev, mapData, handleShow }) => {
  const renderData = (val, i) => {
    return (
      <div key={i} className="d-flex justify-content-between align-items-start">
        <div>
          <b>{val.value}</b>
        </div>
        <div>
          <Button variant="link" onClick={() => handleShow(val.sources)}>
            Sources
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card className="cardStyle">
      <Card.Header>
        <ContextAwareToggle eventKey={ev}>{title}</ContextAwareToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={ev}>
        <Card.Body>
          {mapData &&
            mapData.map((val, index) => {
              return renderData(val, index);
            })}
          {(!mapData || mapData.length === 0) && <div>No data found</div>}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default RenderIndividualData;
