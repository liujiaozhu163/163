<template>
    <div class="gerenxinxi">
      <el-row :gutter="20">
        <el-col :span="18" >
          <el-row>
            <el-col :span="4">
              <el-image class="b" :src="userInfo.avatarUrl"></el-image>
            </el-col>
            <el-col :span="18"  :push="3">
              <h4>{{userInfo.nickname}}</h4>
              <hr>
              <div>
                <div class="tou">
                  <span>动态</span>
                  <div>{{userInfo.authority}}</div>
                  <el-divider direction="vertical"></el-divider>
                  <span>关注</span>
                  <div>{{userInfo.follows}}</div>
                  <el-divider direction="vertical"></el-divider>
                  <span>粉丝</span>
                  <div>{{userInfo.followeds}}</div>
                </div>
                 <div style="margin: 10px 7px;">个人介绍:</div>
                  <div style="margin: 10px 7px;" >{{userInfo.signature}}</div>
                </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="gedan">
       <h2  >我创建的歌单</h2>

       <div class="a">
         <div v-for="(items,index) in playlist" :key="index">
            <el-image class="b" :src="items.coverImgUrl"></el-image>
         </div>
       </div>


      </div>
    </div>
</template>

<script>

    export default{
       name:'gerenxinxi',
       data(){
         return{
           userInfo:[],
           playlist:[],
           }
       },
       methods:{
   		getshijian(time){
   			let now = new Date(time);
   			return ((now.getMinutes())>= 10 ? now.getMinutes() : '0' + now.getMinutes())+"："+((now.getSeconds())>= 10 ? now.getSeconds() : '0' + now.getSeconds());
   		},
   		getTime(t){
   			let now = new Date(t);
   			return now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
   		},
         getUserInfo(){
   		this.$http.get('/user/detail',{
   		  params:{
   		    uid:this.$route.params.id
   		  },
   		}).then((req)=>{
   		this.userInfo= req.data.profile;
   		}).catch((e)=>{
   		  console.log('获取详情失败')
   		});

       this.$http.get('/user/playlist',{
       		  params:{
       		    uid:this.$route.params.id,

       		  },

       		}).then((req)=>{
       		this.playlist = req.data.playlist;
       		}).catch((e)=>{
       		  console.log('获取歌单失败')
       		});

     }
       },
       mounted(){
         this.getUserInfo();
       }
     }
</script>

<style>

  .tou{
    display: flex;
  }
  .a{
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #7F7F7F;
    padding: 10px 0;
  }
  .gerenxinxi{
    width: 1000px;
    margin: auto;

  }
  .b{
    width: 200px;
    height: 200px;

  }


</style>
