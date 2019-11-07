<template>
  <div>
    <div>
      <el-popover ref="popover4" placement="right" width="400" trigger="click">
        <table class="tab3 table table-striped table-hover " style="width:100%">
          <tr>
            <td width="30"></td>
            <td>
              <h4>播放列表</h4>
            </td>
            <td><span class='el-icon-close size' @click="delALLSong()"></span></td>
          </tr>
          <tr v-for="(items,index) in info">
            <td class='el-icon-video-play size'></td>
            <td>{{items.name}}</td>
            <td><span class='el-icon-close size' @click="delSong(index)"></span></td>
          </tr>
        </table>
      </el-popover>
    </div>
    <span v-popover:popover4 class="el-icon-tickets size"></span>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'tempSong',
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        info: state => state.info

      })
    },
    methods: {
      delSong(index) {
        this.$store.state.info.splice(index, 1)
      },
      delALLSong(){
        this.$store.state.info.splice(0,100)
      }
    }

  }
</script>

<style>
  .tab3 tr,
  .tab3 td {
    height: 25px;
  }

  .el-popper {
    height: 500px;
    overflow: scroll;
    background: #292929;
  }
</style>
