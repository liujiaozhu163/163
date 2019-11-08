<template>
  
  <div class="banner"  v-loading="loading">
   <el-carousel :interval="4500" type="card" height="340px">
     <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <el-image :src="item.imageUrl">
        </el-image>
     </el-carousel-item>
   </el-carousel>
  
  </div>
</template>

<script>
  
  export default{
    name:'banner',
    data(){
      return{
        bannerList:[],
        loading:true
      }
    },
    methods:{
      getBanner(){
        this.$http.get('/banner',{
          params:{
            type:0
          },
          withCredentials: true
        }).then(data=>{
          this.bannerList = data.data.banners;
          this.loading = false;
        }).catch(e=>{
          console.log("轮播图请求失败");
        });
      }
    },
    mounted() {
      this.getBanner();
    }
  }
</script>

<style>
</style>
