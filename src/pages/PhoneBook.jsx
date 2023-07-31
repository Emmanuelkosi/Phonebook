import React from "react";
import { Container, FloatingLabel, Form, Dropdown } from "react-bootstrap";

import NavigationBar from "../NavigationBar";

function PhoneBook() {
  return (
    <div>
      <NavigationBar />
      <Container className="centerText">
        <h1> Phonebook</h1>

        <Dropdown className="marginBottom">
          <Dropdown.Toggle>Phonebook</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item> Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <FloatingLabel
          controlId="floatingInput"
          label="Filter"
          className="mb-3 floatlabelWidth"
        >
          <Form.Control type="text" placeholder="Filter" />
        </FloatingLabel>
      </Container>
    </div>
  );
}
export default PhoneBook;
