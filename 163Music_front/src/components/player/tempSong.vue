<template>
  <div>
    <div>
    <el-popover ref="popover4" placement="right" width="400" trigger="click">
      <!-- <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table> -->
      <table class="tab3"  style="width:100%" >
        <tr>
          <td width="30"></td>
          <td><h4>播放列表</h4></td>
        </tr>
        <tr v-for="(items,index) in info">
          <td class='el-icon-video-play size'></td>
          <td>{{items.name}}</td>
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
        info:state=>state.info

      })
    }

  }
</script>

<style>

  .tab3 tr,.tab3 td{
    height: 25px;
   /* color:#FFFFFF; */
  }
  .el-popper{
    height: 500px;
    overflow: scroll;
    background:#292929;
  }

</style>
