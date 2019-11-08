<template>

  <div class="detail">


	   <div class="container">

	  <el-row :gutter="20">
	    <el-col :span="7"><el-image :src="playLists.picUrl"></el-image></el-col>
	  专辑:{{this.playLists.name}}<br>
	  歌手:{{this.playLists.artist.name}}<br>
	  发行时间:{{this.playLists.publishTime}}<br>
	  发行公司：{{this.playLists.company}}<br>
	  <button class="btn el-icon-video-play">播放</button>
					<button class="btn el-icon-folder-add">455</button>
					<button class="btn btn-default el-icon-download">45</button>
					<button class="btn btn-default el-icon-chat-dot-square">160</button>
	  </el-row>
	 专辑介绍：{{this.playLists.description}}



	      <h2>{{msg}}<hr></h2>
	 <el-table
	      :data="songs"
	      style="width: 100%">
	      <el-table-column
	        prop="gequbiaoti"
	        label="歌曲标题"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="shichang"
	        label="时长">
	      </el-table-column>
		  <el-table-column
		    prop="geshou"
		    label="歌手">
		  </el-table-column>
	    </el-table>

  </div>
  </div>

</template>

<script>





export default{
    name:'detail',
    data(){
      return{
      msg:"包含歌曲列表",
        playLists:[],
        songs:[]
      }
    },
    methods:{
      getDetail(){
    
        this.$http.post('/album?id='+this.$route.params.id).then((data)=>{
          this.playLists = data.data.album;
          this.songs=data.data.songs;
             console.log(this.songs);
          for(var i=0;i<=this.songs.length;i++){
          this.songs.push({geshou:this.songs[i].al.name,shichang:this.songs[i].dt,gequbiaoti:this.songs[i].name})
          }
        }).catch((err)=>{
          console.log('失败......');
        });
      }
    },
    mounted() {
      this.getDetail();
    }
  }
</script>

<style>
</style>
