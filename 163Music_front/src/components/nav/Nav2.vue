<template>


  <div class="yanse">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">1</div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <div class="navbanner">
            <el-menu class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">
                <router-link to="/">推荐</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/topList">排行榜</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/personalized">歌单</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/dj">主播电台</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link to="/artist">歌手</router-link>
              </el-menu-item>
              <el-menu-item index="6">
                <router-link to="/album">新碟上架</router-link>
              </el-menu-item>
            </el-menu>
          </div>

        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">2</div>
      </el-col>
    </el-row>


  </div>




  <!-- <div>
   <router-link to="/">首页123134</router-link>
   <router-link to="/topList">排行榜23156465</router-link>
   <router-link to="/personalized">歌单</router-link>
   <router-link to="/dj">主播电台</router-link>
   <router-link to="/artist">歌手</router-link>
   <router-link to="/album">新碟上架</router-link>
  </div> -->
</template>

<script>
  export default {
    name: 'nav2',
    data() {
      return {}
    }
  }
</script>

<style>
  a {
    display: block;
    text-decoration: none !important;
  }

  a:hover{
    text-decoration: none !important;
  }

  .yanse {
    background: #EB1616;
    color: #EB1616;
  }

  .el-menu-demo {
    background: #EB1616;

  }

  .el-menu--horizontal>.el-menu-item {
    color: #FFFFFF;
  }
</style>
