<template>
  <div  v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
	<div class="highquality" >
	  <div class="container">
			<div class="classify">
				<ul>
					<li class="recommend">热门推荐</li>
					<li>华语</li>
					<li>流行</li>
					<li>摇滚</li>
					<li>民谣</li>
					<li>电子</li>
				</ul>
			</div>
	<!-- <h1>{{msg}}</h1> -->

	     <el-row :gutter="20">
	       <el-col :span="6" v-for="(items,index) in playLists" :key="index" style="height: 300px;">
	         <router-link :to="{name:'detail',params:{id:items.id}}">
	           <el-image :src="items.coverImgUrl"></el-image>
	           <p class="text-center">
	             {{items.name.substring(0,12)}}
	           </p>
	         </router-link>
	       </el-col>
	     </el-row>
	 </div>
	</div>
  </div>
</template>

<script>
	export default{
	  name:'highquality',
	  data(){
	    return{
	      msg:'热门推荐',
	      playLists:[],
        loading:true
	    }
	  },
	  methods:{
	    getHighquality(){
	      this.$http.get('/top/playlist/highquality',{
	        params:{
	          before:new Date().getTime(),
	          limit:16
	        }
	      }).then(data=>{
	        // console.log(data);

	       this.playLists = data.data.playlists;
         this.loading=false;
	      }).catch(e=>{
	        console.log("歌单获取失败");
	      });
	    }
	  },
	  mounted() {
	    this.getHighquality();
	  }
	}
</script>

<style>

	.text-center{
	  text-align: center;
	}
	.classify{
		border-bottom:2px solid #EB1616 ;
		margin-bottom: 20px;
	}
	.classify ul{
		padding:0

	}
	.recommend{
		font-size:26px;
		style:"border:none"
	}
	.classify li{
		display:inline;
		padding:0 15px ;
		border-right: 1px solid #B6ACAC;

	}

</style>
