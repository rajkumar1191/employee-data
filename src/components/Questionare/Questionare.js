import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";

export default function Questionare({ setFormSubmit }) {
  const primaryQuestion = [
    "Need details about ids and licenses",
    "Need details about geographics",
    "Need details about contact information",
  ];

  return (
    <>
      <Container className="cardContainer">
        <Row>
          <Col xs={12}>
            <h5 className="textCenter">Start a Conversation</h5>
          </Col>
        </Row>
        <Row>
          {primaryQuestion &&
            primaryQuestion.map((question, index) => {
              return (
                <Col lg={4} key={index}>
                  <Card className="cardStyle">
                    <Card.Body>
                      <Card.Text>{question}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
      <Container className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Send a message" />
          </Form.Group>
          <Button variant="dark" onClick={() => setFormSubmit(true)}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
