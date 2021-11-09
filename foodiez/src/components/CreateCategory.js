import React from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../stores/categoryStore";

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

  const handleSubmit = (e) => {
    e.preventDefault();
      categoryStore.categoryCreate(CreateCategory)
    handleClose();
  };
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Create Category
        </Button>
        <Modal show={show} onHide={handleClose}>
          <div>
            <form onSubmit={handleSubmit}>
              <h3 className="cmj">Add a New Category</h3>
              <br />
              Category Name:
              <input
                className="form-control me-2"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <br />
              Category Image:
              <input
                className="form-control me-2"
                name="image"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </>
    </div>
  );
}

export default CreateCategory;
