import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await api.post("/signup", userData);
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      localStorage.setItem(res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
