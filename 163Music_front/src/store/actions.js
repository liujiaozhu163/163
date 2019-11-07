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
}
