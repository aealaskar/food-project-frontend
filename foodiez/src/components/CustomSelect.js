import React from "react";
import Select from "react-select";
import ingredientStore from "../stores/ingredientStore";

function CustomSelect() {
  const ingredients = ingredientStore.ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.name,
  }));
  return (
    <Select
      defaultValue={[ingredients[1], ingredients[3]]}
      isMulti
      name="colors"
      options={ingredients}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}

export default CustomSelect;
