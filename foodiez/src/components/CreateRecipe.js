import React from "react";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";
import IngredientCreate from "./IngredientCreate";
import IngredientList from "./IngredientList";
import CustomSelect from "./CustomSelect";
import recipeStore from "../stores/recipeStore";
import CustomCreateCategory from "../components/CustomCreateCategory";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
// import ingredientStore from "../stores/ingredientStore";
// import categoryStore from "../stores/categoryStore";

// const IngredientList = ingredientStore.ingredients;
// const CategoryList = categoryStore.category; // maybe we could pass this to custom select?

function CreateRecipe({CreateIngredient}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    categories: "",
    ingredients: CreateIngredient,
  });

  const [Category, setCategory] = useState([]);
  const [Ingredient, setIngredient] = useState([]);

  // useEffect(() => {
  //   if (category) setRecipe({ ...recipe, category: category._id });
  // }, [category]);

  // const handleChange = (value) => {
  //   setSelectValue(value);
  // };
  const handleChange = (e) =>
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });
  const handleSubmit = (e) => {
    e.preventDefault();
    recipeStore.recipeCreate(recipe);
    // console.log(recipeStore.recipe);


    handleClose();
  };
  // console.log("this is in createrecipe", Ingredient);
  // recipe.ingredients = Ingredient;
  // console.log("this is recipe ingredients", recipe.ingredients);

  console.log("this is in catories", Category);
  recipe.categories = Category;
  console.log("this is recipe categories", recipe.Category);

  return (
    <div>
      <>
        {authStore.user ? (
          <>
            <Button
              variant="light"
              onClick={handleShow}
              className="categoryBtn"
            >
              Create recipe
            </Button>
          </>
        ) : (
          <></>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>recipe Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter recipe name"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>choose a recipe image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleImage} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group >
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredient name"
                  name="name"
                  onChange={Ingredient}
                />
              </Form.Group> */}

              <Button variant="light" type="submit" onClick={handleClose}>
                Create Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
      <CustomSelect Ingredient={Ingredient} setIngredient={setIngredient} />
      <CustomCreateCategory setCategory={setCategory} Category={Category} />
      {authStore.user ? (
        <>
          <CreateCategory />
        </>
      ) : (
        <></>
      )}
      <CategoryList />
     {/*  <IngredientList /> */}
    </div>
  );
}

export default observer(CreateRecipe);
