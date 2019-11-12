<template>
  <div class="detail2">
	   <div class="container">
	  <el-row :gutter="20">
	    <el-col :span="7"><el-image :src="playLists.picUrl"></el-image></el-col>
	  专辑:{{this.playLists.name}}<br>
	  歌手:{{this.playLists.artist.name}}<br>
	  发行时间:{{onTime(this.playLists.publishTime)}}<br>
	  发行公司：{{this.playLists.company}}<br>
	  <button class="btn btn-default el-icon-video-play">播放</button>
    <button class="btn btn-default el-icon-folder-add">收藏</button>
	  <button class="btn btn-default el-icon-folder-checked">{{this.playLists.info.shareCount}}</button>
	  <button class="btn btn-default el-icon-download">下载</button>
	  <button class="btn btn-default el-icon-chat-dot-square">{{this.playLists.info.commentCount}}</button>
	  </el-row>
	 专辑介绍：{{this.playLists.description}}
	     <h2>{{msg}}<hr></h2>
	     <el-table :data="songs"  style="width: 100%">
		<el-table-column width="60">
		    <i class='el-icon-video-play'></i>
		</el-table-column>
	      <el-table-column
	        prop="name"
	        label="歌曲标题"
	        >
	      </el-table-column>
		  <el-table-column prop="dt" label="时长" :formatter="setTime" >
		  </el-table-column>
		  <el-table-column prop="ar[0].name" label="歌手" >
		  </el-table-column>

	    </el-table>
      <h2>{{msg1}}<hr></h2>

      <p>共{{this.playLists.info.commentCount}}条评论</p>
    <div class="el-icon-service"></div>
      <el-input
        type="textarea"
        :rows="7"
        placeholder="评论140字以内"
        v-model="textarea">
      </el-input>
</span>

      <el-button type="primary" style="float:right">评论</el-button>
  </div>
  </div>
</template>

<script>

export default{
    name:'detail2',
    data(){
      return{
      msg:"包含歌曲列表",
       msg1:"评论",
        playLists:[],
        songs:[]
      }
    },
    methods:{
      getDetail2(){

        this.$http.post('/album?id='+this.$route.params.id).then((data)=>{
          this.playLists = data.data.album;
          this.songs=data.data.songs;
        }).catch((err)=>{
          console.log('失败......');
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
      this.getDetail2();
    }
  }
</script>

<style>
.container{
  margin-top: 10px;
}
</style>
