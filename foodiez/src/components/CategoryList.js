import React from "react";
import { observer } from "mobx-react-lite";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import { Row } from "react-bootstrap";
function CategoryList() {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  const categoryList = categoryStore.category.map((category) => {
    return <CategoryItem category={category} key={category._id} />;
  });
  console.log(categoryList);
  return <Row>{categoryList}</Row>;
}

export default observer(CategoryList);
