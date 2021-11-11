import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import authStore from "../stores/authStore";
import ingredientStore from "../stores/ingredientStore";

function IngredientCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CreateIngredient, setCreateIngredient] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreateIngredient({
      ...CreateIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredientStore.createIngredient(CreateIngredient);
    handleClose();
  };

  return (
    <div>
      {authStore.user ? (
        <Button variant="light" onClick={handleShow} className="categoryBtn">
          Create Ingredient
        </Button>
      ) : (
        <></>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingredient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ingredient name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="light" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default IngredientCreate;
