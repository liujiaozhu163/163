<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
   <v-player></v-player>
  </div>
</template>

<script>

import Nav from '@/components/nav/Nav.vue' // 导入 nav 组件
import Player from "@/components/player/player.vue"
export default {
  name: 'App',
  components:{
    'v-nav':Nav,
    'v-player':Player
  }
}
</script>

<style>

</style>
