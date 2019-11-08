<template>
 <div>
   <p class="txt">{{this.desc.briefDesc}}</p>
 </div>
</template>
<script>
  export default{
    name:'desc',
    data(){
      return{
         desc:''
      }
    },
    methods:{
      getDesc(){
        this.$http.get('/artist/desc',{
          params:{
            id: this.$route.params.id
          }
        }).then(obj=>{
            this.desc = obj.data;
        }).catch(e=>{
          console.log(e)
        });
      }
    },
    mounted(){
      this.getDesc()
    }
  }
</script>

<style>
  .txt{
    width: 60%;
  }
</style>
