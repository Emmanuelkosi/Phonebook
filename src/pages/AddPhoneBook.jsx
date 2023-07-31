import React, { useState } from "react";
import NavigationBar from "../NavigationBar";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import axios, * as others from "axios";
import "../style.css";

function AddPhoneBook() {
const [name,setNAME]=useState ({name:""})
function handlename(event){
  const{name,value}=event.target;
  setNAME((prevalue)=>{
    return{
      ...prevalue,[name]: value,
    }
  })
}
  function handlesubmit(event){
    axios.post('http://localhost:3000/posts', {
      Name: name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <NavigationBar />
      <Container className="centerText">
        <h1> Add New Phone Book</h1>
        <Form onSubmit={handlesubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3 floatlabelWidth"
          >
            <Form.Control type="text" placeholder="Name" value={name.name}/>
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
