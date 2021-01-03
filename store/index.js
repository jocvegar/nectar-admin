import { auth } from "~/plugins/firebase.js";

// state
export const state = () => ({
  user: ""
});

export const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return !!state.user;
  }
};

// actions
export const actions = {
  setUser({ commit }, payload) {
    commit("SET_USER", payload);
  },
  signInWithEmail({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
  },
  signOut() {
    return auth.signOut();
  }
};

// mutations
export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export const strict = false;
