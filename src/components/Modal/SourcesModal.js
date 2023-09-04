import { Modal, Table, Button } from "react-bootstrap";

export default function SourcesModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sources List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover responsive size="lg">
          <thead>
            <tr>
              <th>Discovered Item</th>
              <th>Discovered Via</th>
              <th>Connected Source Name</th>
              <th>Public Source Name</th>
              <th>Document Name</th>
              <th>Source Address</th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              props.data.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.discoveredItem}</td>
                    <td>{data.discoveredVia}</td>
                    <td>{data.connectedSourceName}</td>
                    <td>{data.publicSourceName}</td>
                    <td>{data.documentName}</td>
                    <td>{data.sourceAddress}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
