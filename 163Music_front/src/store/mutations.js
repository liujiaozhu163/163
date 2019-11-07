/*包含多个action触发去直接更新状态的方法的对象*/
import {
  SETALINFO,
  SETINFO
} from "./mutation-types"
export default {
  [SETALINFO](state, {
    tracks
  }) {
    state.alInfo = tracks;
    localStorage.setItem('alInfo', JSON.stringify(tracks))
  },
  [SETINFO](state, {
    tracks
  }) {
    let sum = 0;
    for (var i = 0; i < state.info.length; i++) {
      if (state.info[i].id != tracks.id) {
        sum++;
      }
    }
    if (sum == state.info.length) {
      state.info.unshift({
        id: tracks.id,
        name: tracks.name,
        url: tracks.al.picUrl
      })
      localStorage.setItem('info', JSON.stringify(state.info))
    }
  }
}
