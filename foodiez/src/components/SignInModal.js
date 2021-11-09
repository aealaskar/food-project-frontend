import React from "react";
import { useState } from "react";
import authStore from "../stores/authStore";
import { Modal, Button, Form } from "react-bootstrap";
function SignInModal() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // REVIEW: Remove the div tag if you don't need it
    <div>
      <>
        <Button variant="light" onClick={handleShow}>
          Sign In
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              {/* REVIEW: Remove this Form Group, it's not doing anything  */}
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              {/* REVIEW: You shouldn't call handleClose here. You can call it inside handleSubmit after calling the signin method */}
              <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default SignInModal;
