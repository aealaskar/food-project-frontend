import React from "react";
import categoryStore from "../stores/categoryStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";

function CategoryItem({ category }) {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  const [check, setCheck] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChange = () => {
    if (check === true) {
      setCheck(false);
    } else {
      setCheck(true);
      setSelectedCategory({ ...selectedCategory, category });
    }
  };
  console.log(check);
  const newCategory = [];
  if (check === true) {
    
    newCategory.push(category.name)
  }
  console.log(selectedCategory);
  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <InputGroup.Checkbox checked={check} onChange={handleChange} />
      <img src={category.image} className="card-img-top" alt="NO IMAGE!" />

      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
      </div>
    </div>
  );
}

export default CategoryItem;
