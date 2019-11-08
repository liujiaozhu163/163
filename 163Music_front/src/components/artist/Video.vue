<template>
  <div>
    <el-row :gutter='20'>
      <el-col :span="6" v-for="(item,index) in videos" :key="index">
        <router-link :to="{name:'mvs',params:{id:item.id}}">
          <el-image :src="item.imgurl" class="img"></el-image>
          <p>
            <span>{{item.name}}</span>
          </p>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name:'video',
    data(){
      return{
        videos:[]
      }
    },
    methods:{
      getVideo(){
        this.$http.get('/artist/mv',{
          params:{
            id:this.$route.params.id
          }
        }).then(obj=>{
          this.videos = obj.data.mvs
        }).catch(e=>{
          console.log(e)
        });
      }
    },
    mounted(){
      this.getVideo();
    }
  }
</script>

<style>
  .img{
    width: 200px;
    height: 160px;
  }
</style>
