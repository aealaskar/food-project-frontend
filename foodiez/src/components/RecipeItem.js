import React from "react";

function RecipeItem({ recipe }) {
  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
      </div>
    </div>
  );
}

export default RecipeItem;
