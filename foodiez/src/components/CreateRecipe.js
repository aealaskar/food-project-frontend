import React from "react";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";
import IngredientCreate from "./IngredientCreate";
import IngredientList from "./IngredientList";
import CustomSelect from "./CustomSelect";

function CreateRecipe() {
  return (
    <div>
      <CreateCategory />
      <CategoryList />


      <CustomSelect />
      <IngredientList />

      <IngredientCreate />
      <IngredientList />
    </div>
  );
}

export default CreateRecipe;
