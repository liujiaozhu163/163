<template>
  <div>
    <v-banner></v-banner>
    <v-highquality></v-highquality>
	<v-end></v-end>
  </div>
</template>

<script>

  import Banner from '@/components/banner/Banner.vue'
  import Highquality from '@/components/home/Highquality.vue'
	import End from '@/components/nav/End.vue'
  export default{
    name:'home',
    components:{
      'v-banner':Banner,
      'v-highquality':Highquality,
	  'v-end':End,
    }
  }
</script>

<style>
</style>
