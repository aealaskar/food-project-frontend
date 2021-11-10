import { makeAutoObservable } from "mobx";
import api from "./api";

class CategoryStore {
  category = [];
  //isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchCategory = async () => {
    try {
      const res = await api.get("/category");
      this.category = res.data;
      //this.isLoading = false;
    } catch (error) {}
  };
  categoryCreate = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) {
        formData.append(key, newCategory[key]);
      }
      const res = await api.post("/category", formData);
      this.category.push(res.data);
    } catch (error) {}
  };
}


const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
