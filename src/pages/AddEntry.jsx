import React from "react";

import NavigationBar from "../NavigationBar";

import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Dropdown,
  Row,
} from "react-bootstrap";

function AddEntry() {
  return (
    <div>
      <NavigationBar />
      <Container className="centerText">
        <h1> Add New Entry</h1>
        <Form>
          <Row>
            <Dropdown className="marginBottom">
              <Dropdown.Toggle>Phonebook</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item> Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3 floatlabelWidth"
          >
            <Form.Control type="text" placeholder="Name" size="sm" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Number"
            className="mb-3 floatlabelWidth"
          >
            <Form.Control type="tel" placeholder="083-044-1544" size="sm" />
          </FloatingLabel>

          <Button className="buttonPadding" type="submit">
            {" "}
            SAVE{" "}
          </Button>
          <Button className="buttonPadding" variant="danger">
            {" "}
            CANCEL
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddEntry;
