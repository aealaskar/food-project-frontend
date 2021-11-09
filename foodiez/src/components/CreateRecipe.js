import React from "react";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";

function CreateRecipe() {
  return (
    <div>
      <CreateCategory />
      <CategoryList />
      
    </div>
  );
}

export default CreateRecipe;
