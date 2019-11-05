import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state:{
    isLogin:true,
    userInfo:{}
  },
  getters:{

  },
  mutations:{
    setuserInfo(state,user){
      localStorage.setItem("userIfor",JSON,stringify(user))
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
