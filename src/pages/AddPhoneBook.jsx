import React from "react";
import NavigationBar from "../NavigationBar";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "../style.css";

function AddPhoneBook() {
  return (
    <div>
      <NavigationBar />
      <Container className="centerText">
        <h1> Add New Phone Book</h1>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3 floatlabelWidth"
          >
            <Form.Control type="text" placeholder="Name" />
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

export default AddPhoneBook;
