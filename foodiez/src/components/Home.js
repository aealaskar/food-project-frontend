import React from "react";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";

function Home() {
  return (
    <div>
      <CreateCategory />
      <CategoryList />
    </div>
  );
}

export default Home;
