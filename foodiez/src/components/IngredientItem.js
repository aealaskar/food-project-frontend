import React from "react";

function IngredientItem({ ingredient }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <div className="card-body">
        <h5 className="card-title">{ingredient.name}</h5>
        {ingredient.description}
      </div>
    </div>
  );
}

export default IngredientItem;
