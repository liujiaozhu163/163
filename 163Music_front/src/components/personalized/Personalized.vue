<template>

<div  v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">

  <div class="personalized">
   <div class="container">
        <div class="one">
          <h2>{{msg}}</h2>
          <h2><v-fenlei></v-fenlei></h2>
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
        loading:true

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

         this.loading = false;
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
  .personalized{
    min-height: 500px;
  }
	.one{
		display:flex;
		width:100%;
		height:80px;
		border-bottom:2px solid #C10721;
		padding-bottom: -20px;
		margin-bottom:30px;
	}

</style>
