import { createStore } from "vuex";
import { User } from "@/types/types";

export default createStore({
  state: {
    users: [] as User[] | [],
    isLoadingUsers: false as boolean,
    findRequest: "" as string,
    selectedUser: null as null | User,
    findStatus: "Начните поиск" as string,
    findUserError: "" as string,
  },
  mutations: {
    isLoadingStart(state) {
      state.isLoadingUsers = true;
    },
    isLoadingFinish(state) {
      state.isLoadingUsers = false;
    },
    setUsers(state, payload) {
      if (state.findRequest) {
        if (!payload.length) {
          state.findStatus = "Ничего не найдено";
        } else {
          state.findStatus = "Начните поиск";
        }
        state.users = payload;
        state.findUserError = "";
      } else {
        state.users = [];
        state.selectedUser = null;
      }
    },
    removeUsers(state) {
      state.users = [];
      state.selectedUser = null;
    },
    setFindRequest(state, payload) {
      state.findRequest = payload;
    },
    selectedUser(state, payload) {
      state.selectedUser = payload;
    },
    findUserError(state) {
      state.findUserError = "Ошибка запроса на сервер";
    },
  },
  actions: {
    async findUsers({ commit }, findRequest) {
      commit("isLoadingStart");
      commit("setFindRequest", findRequest);
      try {
        if (findRequest) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?${findRequest}&limit=10`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          commit("setUsers", data);
        } else {
          commit("removeUsers");
        }
      } catch (err) {
        commit("findUserError");
        console.error(err);
      } finally {
        commit("isLoadingFinish");
      }
    },
    selectedUser({ commit }, user) {
      commit("selectedUser", user);
    },
  },
});
