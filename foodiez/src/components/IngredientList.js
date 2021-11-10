import React from "react";
import { Col, Row } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";

function IngredientList() {
  const ingredients = ingredientStore.ingredients.map((ingredient) => (
    <Col className="column">
      <IngredientItem ingredient={ingredient} />
    </Col>
  ));
  return (
    <div>
      <Row>{ingredients}</Row>
    </div>
  );
}

export default observer(IngredientList);
