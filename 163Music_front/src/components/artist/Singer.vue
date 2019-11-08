<template>
  <div class="singer">
    <el-image :src="this.singer.picUrl" class="tupian"></el-image>
    <el-tabs @tab-click="handleClick">
        <el-tab-pane label="热门作品" name="first">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column
                fixed
                type="index"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
                label="播放"
                width="50">
                <i class='el-icon-video-play'></i>
              </el-table-column>
              <el-table-column
                prop="name"
                label="歌名"
                width="300">
              </el-table-column>
              <el-table-column
                prop="dt"
                :formatter="timeFormat"
                label="时间"
                width="150">
              </el-table-column>
              <el-table-column
                prop="al.name"
                label="专辑"
                width="300">
              </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="所有专辑" name="second"><v-album></v-album></el-tab-pane>
        <el-tab-pane label="相关MV" name="third"><v-video></v-video></el-tab-pane>
        <el-tab-pane label="艺人介绍" name="fourth">

             <v-desc></v-desc>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  import Album from './Album.vue';
  import Video from './Video.vue';
  import Desc from './Desc.vue';
  export default{
    name:'singer',
    data(){
      return{
        singer:{},
        tableData:[]
      }
    },
    components:{
      'v-album': Album,
      'v-video': Video,
      'v-desc': Desc
    },
    methods:{
      getSinger(){
        this.$http.get('/artists',{
          params:{
            id: this.$route.params.id,
          },
          withCredentails: true
        }).then(obj=>{
          console.log(obj)
          this.singer = obj.data.artist;
          this.tableData = obj.data.hotSongs;
        }).catch(e=>{
          console.log(e)
        });
      },
      handleClick(tab, event) {
        //console.log(tab);
      },
      timeFormat(row, column) {
        let times = row.dt;
        let m = parseInt((times % (1000 * 60 * 60)) / (1000 * 60));
        let s = parseInt((times % (1000 * 60)) / (1000));
        let mm = m >= 9 ? m : '0' + m;
        let ss = s >= 9 ? s : '0' + s;
        return mm + ":" + ss;
      }
    },
    mounted(){
      this.getSinger();
    }
  }
</script>

<style>
  .singer{
    width: 60%;
    margin:auto;
  }
  .tupian{
    width: 640px;
    height: 300px;
  }
</style>
