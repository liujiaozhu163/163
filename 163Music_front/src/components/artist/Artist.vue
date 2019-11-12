<template>

  <div class="artist">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐</span>
          </div>
          <div>
          <el-link target="_blank" class='link'>推荐歌手</el-link>
          <el-link target="_blank" class='link'>入驻歌手</el-link>
          </div>
        </el-card>
        <hr>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>华语歌手</span>
          </div>
          <div>
            <el-link target="_blank" class='link'>华语男歌手</el-link>
            <el-link target="_blank" class='link'>华语女歌手</el-link>
            <el-link target="_blank" class='link'>华语组合乐队</el-link>
          </div>
        </el-card>
        <hr>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>欧美</span>
          </div>
          <div>
            <el-link target="_blank" class='link'>欧美男歌手</el-link>
            <el-link target="_blank" class='link'>欧美女歌手</el-link>
            <el-link target="_blank" class='link'>欧美组合乐队</el-link>
          </div>
        </el-card>
        <hr>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>日本</span>
          </div>
          <div>
            <el-link target="_blank" class='link'>日本男歌手</el-link>
            <el-link target="_blank" class='link'>日本女歌手</el-link>
            <el-link target="_blank" class='link'>日本组合乐队</el-link>
          </div>
        </el-card>
        <hr>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>韩国</span>
          </div>
          <div>
            <el-link target="_blank" class='link'>韩国男歌手</el-link>
            <el-link target="_blank" class='link'>韩国女歌手</el-link>
            <el-link target="_blank" class='link'>韩国乐队组合</el-link>
          </div>
        </el-card>
        <hr>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>其他</span>
          </div>
          <div>
            <el-link target="_blank" class='link'>其他男歌手</el-link>
            <el-link target="_blank" class='link'>其他女歌手</el-link>
            <el-link target="_blank" class='link'>推荐乐队组合</el-link>
          </div>
        </el-card>
        <hr>
      </el-col>
      <el-col :span="20">
        <div>
        <h2>入驻歌手</h2>
        <hr style="color: red">
          <el-col :span="6" v-for="(item,index) in artists" :key="index">
            <router-link :to="{name:'singer',params:{id:item.id}}">
              <el-image :src="item.img1v1Url" class="img"></el-image>
              <p style="text-align:center">
                {{item.name}}
              </p>
            </router-link>
          </el-col>
        </div>
        <div>
        <h2>热门歌手</h2>
        <hr>
          <el-col :span="6" v-for="(item,index) in Hotartist" :key="index">
            <router-link :to="{name:'singer',params:{id:item.id}}">
              <el-image :src="item.img1v1Url" class="img"></el-image>
              <p style="text-align:center">
                {{item.name}}
              </p>
            </router-link>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default{
    name:'artist',
    data(){
      return{
        artists:[],
        Hotartist:[]
      }
    },
    methods:{
      getArtist(){
        this.$http.get('/artist/list',{
          params:{
            cat:5001,
            limit:8
          },
          withCredentials: true
        }).then(obj=>{
          this.artists = obj.data.artists
        }).catch(e=>{
          console.log(e)
        });
      },
      getHotartist(){
        this.$http.get('/top/artists',{
          params:{
            limit:12
          },
          withCredentials: true
        }).then(obj=>{
          this.Hotartist = obj.data.artists
        }).catch(e=>{
          console.log(e)
        });
      }
    },
    mounted(){
      this.getArtist();
      this.getHotartist();
    }
  }
</script>

<style>
  .link{
    display: block;
    width: 90px;
  }
  .img{
    width: 200px;
    height: 160px;
  }
  .artist{
    width: 60%;
    margin:auto;
  }
  
</style>
