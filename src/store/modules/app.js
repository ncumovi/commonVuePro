const state = {
  name: "default",
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
    Cookies.set("name", name);
  },
};

const actions = {
  setName({ commit }, name) {
    commit("SET_NAME", name);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
