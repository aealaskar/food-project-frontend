import { observer } from "mobx-react";
import React from "react";
import { Card } from "react-bootstrap";

function IngredientItem({ ingredient }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{ingredient.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default observer(IngredientItem);
