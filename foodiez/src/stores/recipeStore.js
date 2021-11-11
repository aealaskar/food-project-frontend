import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  recipe = [];
  //isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchRecipe = async () => {
    try {
      const res = await api.get("/recipes");
      this.recipe = res.data;
      //this.isLoading = false;
    } catch (error) {}
  };
  recipeCreate = async (newRecipe) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) {
        formData.append(key, newRecipe[key]);
      }
      const res = await api.post("/recipes", formData);
      this.recipe.push(res.data);
      
    } catch (error) {}
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();

export default recipeStore;
