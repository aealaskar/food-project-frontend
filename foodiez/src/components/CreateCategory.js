import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../stores/categoryStore";
import authStore from "../stores/authStore";

function CreateCategory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [CreateCategory, setCreateCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    setCreateCategory({ ...CreateCategory, [e.target.name]: e.target.value });
  };
  const handleImage = (event) =>
    setCreateCategory({ ...CreateCategory, image: event.target.files[0] });
  const handleSubmit = (e) => {
    e.preventDefault();
    categoryStore.categoryCreate(CreateCategory);
    handleClose();
  };
  return (
    <>
      {/* {authStore.user ? ( */}
      <Button variant="primary" onClick={handleShow} className="categoryBtn">
        Create Category
      </Button>
      {/* ) : (
        <></>
      )} */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>choose an image please</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImage} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateCategory;
