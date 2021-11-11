import React from "react";
import Select from "react-select";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

function CustomSelect(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CreateIngredient, setCreateIngredient] = useState({
    name: "",
    description: "",
  });

  const ingredients = ingredientStore.ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient._id,
    // value: ingredient.name // if i want the name of the ingredient
  }));
  // useState

  const handleChangevalue = (value) => {
    console.log("this is before", value);
    value = value.map((v) => v.value);
    console.log("this is for v", value);
    props.setIngredient(value);

    console.log(props.Ingredient);
    // setIngredient({ ...Ingredient, [e.target.value]: e.target.value });

    // props.setIngredient([...props.Ingredient, value]);
    // console.log(props.Ingredient);
  };
  const handleSubmitValue = () => {
    props.Ingredient = console.log(props.Ingredient);
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
