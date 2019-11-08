<template>
  <div>
    <v-banner></v-banner>
    <v-highquality></v-highquality>
  </div>
</template>

<script>
  import Banner from '@/components/banner/Banner.vue'
  import Highquality from '@/components/home/Highquality.vue'

  export default {
    name: 'home',
    components: {
      'v-banner': Banner,
      'v-highquality': Highquality,

    }
  }
</script>

<style>
  
  *{
    margin: 0;
    padding: 0;
  }
</style>
