<template>
  <div class="detail">
    <div class="container">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-image :src="this.gedan.coverImgUrl" style='width:340px; height:300px'></el-image>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <h1>{{this.gedan.name}}</h1>
            <el-image :src="this.gedan.creator.avatarUrl" style='width:50px; height:40px'></el-image>
            <span>{{this.gedan.creator.nickname}}</span>
            <span>{{onTime(this.gedan.createTime)}}</span>


            <div style="margin: 5px;margin-bottom: 10px;">
              <button class="btn el-icon-video-play ">播放</button>
              <button class="btn el-icon-folder-add">{{this.gedan.subscribedCount}}</button>
              <button class="btn el-icon-folder-checked">{{this.gedan.shareCount}}</button>
              <button class="btn el-icon-download">下载</button>
              <button class="btn el-icon-chat-line-square">{{this.gedan.commentCount}}</button>
            </div>
            <span>标签：{{this.gedan.tags}} </span>
            <p> 介绍:{{this.gedan.description}}</p>
          </div>
        </el-col>
      </el-row>


      <h2>歌曲列表</h2>
      <el-table :data="tracks" style="width: 100%">
        <el-table-column width="60">
          <template slot-scope="scope">
            <i class='el-icon-video-play col' @click="getSong(songId,scope.$index+1)"></i>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="歌名" width="200">
        </el-table-column>
        <el-table-column prop="ar[0].name" label="作者" width="200">
        </el-table-column>
        <el-table-column prop="dt" label="时长" :formatter="setTime" width="200">
        </el-table-column>
        <el-table-column prop="al.name" label="专辑">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        gedan: {},
        tracks: [],
        track: [],
        songId: '',
        alInfo:{},
      }
    },
    methods: {
      getgedan() {
        //  console.log(this.$route.params.id);
        this.$http.get('/playlist/detail', {
          params: {
            id: this.$route.params.id
          },
          withCredentails: true
        }).then((req) => {
          this.songId = req.data.playlist.id
          this.tracks = req.data.playlist.tracks
          this.gedan = req.data.playlist
        }).catch((e) => {
          console.log('获取歌单详情失败');
        });
      },
      getSong(id, index) {
        console.log(id);
        console.log(index)
        this.$http.get('/playlist/detail', {
          params: {
            id: id
          },
          withCredentails: true
        }).then((req) => {
          console.log(id + "---" + index)
          if (index != null) {
            this.$store.dispatch("setAlInfo", req.data.playlist.tracks[index-1])
            this.$store.dispatch("setInfo", req.data.playlist.tracks[index-1])
          }
        }).catch((e) => {
          console.log('获取歌曲详情失败');
        });
      },
      setTime(t) {
        var time = new Date(t.dt)
        return time.getMinutes().toString().padStart(2, '0') + ":" +
          time.getSeconds().toString().padStart(2, '0')
      },
	  onTime(t){
		  let time = new Date(t);
		  return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
	  }
    },
    mounted() {
      this.getgedan();
    }
  }
</script>
<style>
  .col {
    font-size: 22px;
  }
  .detail{
    margin-top:30px;
  }
</style>
