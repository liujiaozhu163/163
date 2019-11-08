<template>

  <div class="Album1">

   

        <h2>{{msg1}}<hr></h2>
    
      <el-row :gutter="20">
         <el-col :span="4" v-for="(items,index) in playLists" :key="index">

           <router-link :to="{name:'detail',params:{id:items.id}}">
             <el-image :src="items.picUrl"></el-image>
             <p class="text-center">
               {{items.name.substring(0,10)}}
             </p>
           </router-link>
		  
         </el-col>   
       </el-row>
	  

  </div>
</template>

<script>
	
  export default{
    name:'album1',
    data(){
      return{
		msg1:'全部新碟',
        playLists:[]
      }
    },
    methods:{
      getAlbum1(){
			this.$http.get('/top/album',{
          params:{
            before:new Date().getTime(),
             limit:42
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
      this.getAlbum1();
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
