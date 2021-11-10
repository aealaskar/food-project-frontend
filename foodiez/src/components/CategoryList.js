import React from "react";
import { observer } from "mobx-react-lite";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import { Col, Container, Row } from "react-bootstrap";
function CategoryList() {
  // if (categoryStore.isLoading) return <p>Loading</p>;
  const categoryList = categoryStore.category.map((category) => {
    return (
      <Col>
        <CategoryItem category={category} key={category._id} />
      </Col>
    );
  });

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {categoryList}
      </Row>
    </Container>
  );
}

export default observer(CategoryList);
