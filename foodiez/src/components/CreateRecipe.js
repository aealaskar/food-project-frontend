import React from "react";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";
import IngredientCreate from "./IngredientCreate";
import IngredientList from "./IngredientList";

function CreateRecipe() {
  return (
    <div>
      <CreateCategory />
      <CategoryList />
      <IngredientCreate />
      <IngredientList />
    </div>
  );
}

export default CreateRecipe;
