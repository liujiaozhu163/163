<template>
  <div>
    <video width="100%" height="100%" controls>
      <source :src="this.url" type="video/mp4">
    </video>
  </div>
</template>

<script>
  export default{
    name:'mvs',
    data(){
      return{
        url:''
      }
    },
    methods:{
      playmvs(){
        this.$http.get('/mv/url',{
          params:{
            id: this.$route.params.id
          }
        }).then(obj=>{
          console.log(obj.data)
          this.url = obj.data.data.url
        }).catch(e=>{
          console.log(e)
        });
      }
    },
    mounted() {
      this.playmvs();
    }
  }
</script>

<style>
</style>
