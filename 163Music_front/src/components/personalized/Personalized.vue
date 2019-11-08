<template>
  <div class="personalized">
  
   <div class="container">
        <div class="one"><h2>{{msg}}</h2>&nbsp&nbsp
		<h2><v-fenlei></v-fenlei></h2>
		<div>
	     <button class="anniu">热门</button>
		</div>
    </div>
        
		
       <el-row :gutter="20">
         <el-col :span="4" v-for="(items,index) in playLists" :key="index">
         <router-link :to="{name:'detail',params:{id:items.id}}">
             <el-image :src="items.coverImgUrl"></el-image>
             <p class="text-center">
               {{items.name.substring(0,8)+'...'}}
             </p>
           </router-link>
         </el-col>
       </el-row> 
   </div>
  </div>
</template>
  
<script>
  import Fenlei from '@/components/personalized/Fenlei.vue'
   import Detail from '@/components/personalized/Detail.vue'
  
  export default{
    name:'personalized',
	components:{
		'v-fenlei':Fenlei,
		'v-detail':Detail
	},
    data(){
      return{
        msg:'全部',
        playLists:[],
		
      }
    },
    methods:{
      getHighquality(){
        this.$http.get('/top/playlist',{
          params:{
            before:new Date().getTime(),
            limit:60
          }
        }).then(data=>{
          console.log(data);
         this.playLists = data.data.playlists;
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
	.container{
	  width: 80%;
	  margin: auto;
	}
	.one{
		display:flex;
		width:100%;
		height:80px;
		border-bottom:2px solid #C10721;
		padding-bottom: -20px;
		margin-bottom:30px;
	}
	.anniu{
		width:48px;
		height: 30px;
		background: #C10721;
		color:aliceblue;
		margin-left:1184px;
		margin-top:26px;
		border:none;
		border-radius:8px;	
	}
</style>
