<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in hotAlbums" :key="index">
         <el-image :src="item.picUrl"></el-image>
      <div>
        <p style="text-align:center">
          {{item.name}}
        </p>
        <p align="center">
          <span>{{changeTime(item.publishTime)}}</span>
        </p>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name:'album',
    data(){
      return{
        hotAlbums:[]
      }
    },
    methods:{
      getAlbum(){
        this.$http.get('/artist/album',{
          params:{
            id: this.$route.params.id
          }
        }).then(obj=>{
          this.hotAlbums = obj.data.hotAlbums
        }).catch(e=>{
          console.log(e)
        });
      },
      changeTime(t){
        let time = new Date(t);
        return time.getFullYear() +"-"+(time.getMonth()+1)+"-"+time.getDate();
      }
    },
    mounted(){
      this.getAlbum();
    }
  }
</script>

<style>
</style>
