import { makeAutoObservable } from "mobx";
import api from "./api";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIngredients = async () => {
    try {
      const response = await api.get("/ingredients");
      this.ingredients = response.data;
    } catch (error) {
      console.error("IngredientStore -> fetchIngredients -> error", error);
    }
  };

  createIngredient = async (ingredient) => {
    try {
      const response = await api.post("/ingredients", ingredient);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error("IngredientStore -> createIngredient -> error", error);
    }
  };
}
const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;
