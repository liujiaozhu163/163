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
 */
