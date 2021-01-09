import { createStore } from 'vuex'
import { UserModule } from "@/store/User";

export default createStore({
  state: {
  },

  // Mutations are functions that effect the STATE.
  mutations: {
  },

  // Actions are functions that you call throughout your application that call mutations.
  actions: {
  },

  modules: {
    User: UserModule // Vuex의 상태들을 모듈화(.js 파일로)하여 관리할 수도 있다.
  }
})
