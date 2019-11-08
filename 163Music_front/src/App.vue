<template>
	
  <div id="app">
		
    <v-nav1></v-nav1>
	<v-nav2></v-nav2>
    <router-view/>
   <v-player></v-player>
  </div>
</template>

<script>
<<<<<<< HEAD

import Nav from '@/components/nav/Nav.vue' // 导入 nav 组件
import Player from "@/components/player/player.vue"
export default {
  name: 'App',
  components:{
    'v-nav':Nav,
    'v-player':Player
=======
	// 导入 nav 组件
import Nav1 from '@/components/nav/Nav1.vue'
import Nav2 from '@/components/nav/Nav2.vue' 
// 导出 nav 组件
export default {
  name: 'App',
  components:{
    'v-nav1':Nav1,
	'v-nav2':Nav2
>>>>>>> origin/wenxingdu
  }
}
</script>

<style>

</style>
