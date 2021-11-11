import React from "react";
import Select from "react-select";

import { useState } from "react";
import { Button } from "react-bootstrap";

import { Modal, Form } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";
import IngredientItem from "./IngredientItem";


function CustomSelect() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CreateIngredient, setCreateIngredient] = useState({
    name: "",
    description: "",
  });
  const [Ingredient, setIngredient] = useState([]);

  const ingredients = ingredientStore.ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.name,
  }));

  const handleChangevalue = (value) => {
    // setIngredient({ ...Ingredient, [e.target.value]: e.target.value });

    setIngredient([...Ingredient, value]);
    console.log(Ingredient);
  };
  const handleSubmitValue = () => {
    console.log(Ingredient);
  };
  //   console.log(handleChange);

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
 ahmad-css2
      <Select
        defaultValue={[ingredients[1], ingredients[3]]}
        isMulti
        name="colors"
        options={ingredients}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
      />

      <Button variant="light" className="clickme" onClick={handlesubmit}>
        click me
      </Button>

      <div className="input-group">
        <Select
          placeholder="Select Ingredient"
          defaultValue={[ingredients[1], ingredients[3]]}
          isMulti
          name="colors"
          options={ingredients}
          className="select"
          classNamePrefix="select"
          onChange={handleChangevalue}
        />
        <Button onClick={handleShow}>+</Button>
        <div>
          {" "}
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
                    placeholder="Enter Ingredient name"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div>
        <button onClick={handleSubmitValue}>add ingredients to recipe</button>
      </div>

    </div>
  );
}
export default CustomSelect;
