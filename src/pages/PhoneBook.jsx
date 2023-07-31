import React, { useEffect } from "react";
import { Container, FloatingLabel, Form, Dropdown } from "react-bootstrap";
import axios, * as others from "axios";
import NavigationBar from "../NavigationBar";


function PhoneBook() {
  useEffect(( )=>{
    axios.get('http://localhost:3000/posts') .then(function (response) {   console.log(response); }) .catch(function (error) {  console.log(error); }) ;
  })
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
