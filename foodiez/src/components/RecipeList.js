import React from "react";
import { observer } from "mobx-react-lite";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { Row } from "react-bootstrap";
function RecipeList() {

  const recipeList = recipeStore.recipe.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe._id} />;
  });
  console.log(recipeList);
  return <Row>{recipeList}</Row>
  ;
}

export default observer(RecipeList);
