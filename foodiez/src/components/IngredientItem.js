import { observer } from "mobx-react";
import React from "react";
import { Card } from "react-bootstrap";

function IngredientItem({ ingredient }) {
  return (
    <>
      <Card className="glassEffect" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{ingredient.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default observer(IngredientItem);
