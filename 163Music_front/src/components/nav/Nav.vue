<template>

  <div>
   <router-link to="/">首页</router-link>
   <router-link to="/topList">排行榜</router-link>
   <router-link to="/personalized">歌单</router-link>
   <router-link to="/dj">主播电台</router-link>
   <router-link to="/artist">歌手</router-link>
   <router-link to="/album">新碟上架</router-link>
   <span style="float: right;">
      <v-login></v-login>
   </span>
  </div>

</template>

<script>
 import Login from '@/components/login/Login.vue'
 
  export default {
    name:'nav',
    data(){
      return{

      }
    },
    components:{
      'v-login':Login
    }
    }

</script>

<style>
</style>
