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
      // REVIEW: You don't need to set the token in local storage here, you're already doing that in the setUser method
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      // REVIEW: You don't need to set the token in local storage here, you're already doing that in the setUser method
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  logout = () => {
    delete api.defaults.headers.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    // REVIEW: You don't need to set the user to null here
    this.user = null;
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
