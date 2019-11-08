<<<<<<< HEAD
/* 接收组件通知触发mutation调用间接状态的方法对象 */
import  {SETALINFO,SETINFO} from './mutation-types'
export default{
  [SETALINFO]({commit},tracks){
    //提交对mutation的请求
    commit(SETALINFO,{tracks})
  },
  [SETINFO]({commit},tracks){
    commit (SETINFO,{tracks})
  }

=======
import {
  SETUERINFO
} from './mutation-types'
export default {
  [SETUERINFO]({
    commit
  }, user) {
    commit(SETUERINFO, {
      user
    })
  }
>>>>>>> origin/wangyonghua
}
