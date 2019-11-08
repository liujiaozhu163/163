<template>

  <div id="app">

    <v-nav1></v-nav1>
    <v-nav2></v-nav2>
    <router-view />
    <v-player></v-player>
    <v-end></v-end>
  </div>
</template>

<script>
  // 导入 nav 组件
  import Player from "@/components/player/player.vue"
  import Nav1 from '@/components/nav/Nav1.vue'
  import Nav2 from '@/components/nav/Nav2.vue'
  import End from '@/components/nav/End.vue'
  export default {
    name: 'App',
    components: {
      'v-player': Player,
      'v-nav1': Nav1,
      'v-nav2': Nav2,
      'v-end': End,
    }
  }
</script>

<style>
  a{
     text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
</style>
