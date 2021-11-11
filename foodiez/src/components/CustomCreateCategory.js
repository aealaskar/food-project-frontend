import Select from "react-select";
import { useState } from "react";
import categoryStore from "../stores/categoryStore";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import authStore from "../stores/authStore";

function CustomCreateCategory({ setCategory, category }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CreateCategory, setCreateCategory] = useState({
    name: "",
    image: "",
  });

  const categories = categoryStore.categories.map((category) => ({
    label: category.name,
    value: category._id,
    // value: category.name // if i want the name of the category
  }));

  const handleChangeValue = (value) => {
    // console.log("this is before", value);
    value = value.map((v) => v.value);
    // // console.log("this is for v", value);
    setCategory(value);
  };

  const handleChange = (e) => {
    setCreateCategory({
      ...CreateCategory,
      [e.target.name]: e.target.value,
    });
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
      <div className="input-group" className="select">
        <Select
          placeholder="Select category"
          // defaultValue={[]}
          isMulti
          name="colors"
          options={categories}
          // className="select"
          classNamePrefix="select"
          onChange={handleChangeValue}
        />
        {authStore.user ? (
          <Button variant="primary" onClick={handleShow}>
            +
          </Button>
        ) : (
          <></>
        )}
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
      </div>
    </>
  );
}

export default CustomCreateCategory;
