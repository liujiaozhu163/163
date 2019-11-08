<template>

  <div class="Album">

   <div class="container">

        <h2>{{msg}}<hr></h2>

       <el-row :gutter="20">
         <el-col :span="4" v-for="(items,index) in playLists" :key="index">

           <router-link :to="{name:'detail',params:{id:items.id}}">
             <el-image :src="items.blurPicUrl"></el-image>
             <p class="text-center">
               {{items.name.substring(0,10)}}
             </p>
           </router-link>
		  
         </el-col>   
       </el-row>
	    <v-album1></v-album1>
	     </div> 
 </div>
</template>

<script>
   import Album1 from '@/components/album/Album1.vue' 
  export default{
    name:'album',
	components:{
	'v-album1':Album1
	},
    data(){
      return{
        msg:'热门新碟',
		// msg1:'全部新碟',
        playLists:[]
      }
    },
    methods:{
      getAlbum(){
        this.$http.get('/top/album',{
          params:{
            before:new Date().getTime(),
            limit:12
          }
        }).then(data=>{
          console.log(data);

         this.playLists = data.data.albums;
        }).catch(e=>{
          console.log("新碟获取失败");
        });
      }
    },
    mounted() {
      this.getAlbum();
    }
  }
</script>

<style>

  .container{
    width: 80%;
    margin: auto;
  }
 
  .text-center{
    text-align: center;
  }
</style>
