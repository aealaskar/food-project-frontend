import "./App.css";
/* import { Route, Switch } from "react-router"; */
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryList from "./components/CategoryList"
function App() {
  return (
    <div className="App">
      <NavBar />
      <CategoryList/>
      
    </div>
  );
}

export default App;
