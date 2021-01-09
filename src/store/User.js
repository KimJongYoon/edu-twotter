export const UserModule = {
    /*
        네임스페이드 true로 하는 이유는 사용할 때 코드 클린을 위해서이다.
        => 안하면 이렇게 사용 computed(() => store.state.User.user);

    */
    namespaced: true,

    state: {
        user: null
    },

    // Mutations are functions that effect the STATE.
    mutations: {
        SET_USER(state, user){
            state.user = user;
        }
    },

    // Actions are functions that you call throughout your application that call mutations.
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        },

    }
}