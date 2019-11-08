<<<<<<< HEAD
=======

>>>>>>> origin/wangyonghua
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







<<<<<<< HEAD


























/* const store =new Vuex.Store({
   state:{
     isLongin:true,
       :{},
   },
   getters:{

   },
   mutations:{
    setUserInfo(state,user){
      localStorage.setItem("userInfo",JSON.stringify(user))
      state.isLongin=false;
      state.userInfo=user;
    }
   },
   actions:{
       setUserInfo(context,user){
         content.commit("setUserInfo",user);
       }
   }

})
export default store
=======
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
>>>>>>> origin/wangyonghua
 */
