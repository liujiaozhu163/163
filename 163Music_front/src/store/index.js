
import Vue from "vue"
import Vuex from "vuex"
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})







/* Vue.use(Vuex)

const store =  new Vuex.Store({
  state:{
    isLogin:true,
    userInfo:{}
  },
  getters:{

  },
  mutations:{
    setuserInfo(state,user){
      localStorage.setItem("userInfo",JSON.stringify(user))
      state.isLogin=false;
      state.userInfo=user;

    }
  },
  actions:{
    setuserInfo(context,user){
      context.commit("setuserInfo",user);

    }
  }
});
export default store;
 */
