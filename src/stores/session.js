import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    token: "",
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    initializeStore() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      } else {
        this.token = "";
      }
    },
    setToken(token) {
      this.token = token;
    },
    removeToken() {
      this.token = "";
    },
  },
});
