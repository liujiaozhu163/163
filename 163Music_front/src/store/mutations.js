import {
  SETUERINFO
} from './mutation-types'
export default {
  [SETUERINFO](state, {
    user
  }) {
    localStorage.setItem("userInfo", JSON.stringify(user))
    state.isLogin = false;
    state.userInfo = user;
  }
}
