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
      const res = await api.post("/category", newCategory);
      this.category.push(res.data);
    } catch (error) {}
  };
}


const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
