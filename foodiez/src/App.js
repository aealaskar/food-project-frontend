import "./App.css";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryList from "./components/CategoryList";
import CategoryItem from "./components/CategoryItem";
import CreateRecipe from "./components/CreateRecipe";

import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/categoryList/:categorySlug">
          <CategoryItem />
        </Route>
        <Route path="/recipe">
          <CreateRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
