<template>
  <div class="zhibodiantai">
   <!-- 最上面的图表分类 -->
    <div class="datu">
       <ul>
         <li class="mingzi" v-for="(items,index) in categories" v-if="index < 18" :key="index">
           <div class="geshi" @click="getContent(items.id)">
             <el-image class="nihao" :src="items.picUWPUrl">
              </el-image>
            <div class="juzhong">{{items.name}}</div>
           </div>
         </li>
       </ul>
    </div>

  <div class="datu-tuijian">
    <!-- 推荐的节目 -->
    <div class="tuijain">
      <h3>{{jian}}</h3>
       <div class="tjnr">
        <!-- <router-link :to="{name:'xiangqing',params:{id:items.programs.radio.lastProgramId}}"> -->
              <div class="jiemu" v-for="(items,index) in programs" :key="index">
                <router-link :to="{name:'xiangqing',params:{id:items.radio.lastProgramId}}">
                <div class="jiemutouxiang"><el-image :src="items.radio.picUrl">
                 </el-image></div>
                <div class="tuijianwenzi">
                  {{items.mainSong.name.substring(0,18)}}<br>
                  <p class="zuozhe">{{items.radio.name}}</p>
                </div>
                <div class="tag">{{items.radio.category}}</div>
                </router-link>
              </div>
        <!-- </router-link> -->
       </div>
    </div>
    <!-- 热门电台 -->
    <div class="tuijain youbian">
      <h3>{{msg}}</h3>
       <div class="tjnr ">
         <div class="jiemu" v-for="(items,index) in djRadios" :key="index">
			 <router-link :to="{name:'diantai',params:{id:items.id}}">
           <div class="jiemutouxiang"><el-image :src="items.picUrl">
            </el-image></div>
           <div class="tuijianwenzi">
             {{items.rcmdtext}}<br>
             <p class="zuozhe">{{items.name}}</p>
           </div>
           <div class="tag">{{items.category}}</div>
            </router-link>
         </div>
       </div>
    </div>
  </div>
<!-- 电台推荐 -->
   <div>
     <h4>{{tui}}</h4>
     <div>
       <ul>
         <li  class="li" v-for="(items,index) in djRadiosone" :key="index">
           <router-link :to="{name:'dianxiangqing',params:{id:items.id}}">
             {{items.name}} ID:{{items.id}}
           </router-link>
         </li>
       </ul>
     </div>
   </div>
  </div>
</template>

<script>

  export default{
    name:'dj',

    data(){
      return{
        msg:'热门电台',
        tui:'电台推荐',
        jian:'推荐节目',
        categories:[],
        djRadios:[],
        djRadiosone:[],
        programs:[]
      }
    },
    methods:{
      getContent(id){
        console.log(id);
        this.$http.get('/login/status').then(data=>{
          console.log('刷新成功');
          this.$http.get('/login/status').then(req=>{
            console,log(req);
            console.log('OK');
          }).catch(e=>{
            console.log("登录状态不存在");
          })
        }).catch(e=>{
          console.log('刷新失败');
        });

      },
        getdiantai(){
              //图片电台分类
              this.$http.get('/dj/catelist',{
                params:{},
              }).then((req)=>{
              this.categories = req.data.categories;
              // console.log(req)
              }).catch((e)=>{
                console.log('获取电台分类信息失败')
              });
                //热门电台
              this.$http.get('/dj/hot',{
                params:{},
              }).then((req)=>{
              this.djRadios = req.data.djRadios;
              }).catch((e)=>{
                console.log('获取电台信息失败')
              });
                //电台推荐
              this.$http.get('/dj/recommend',{
                params:{},
              }).then((req)=>{
              this.djRadiosone = req.data.djRadios;
              }).catch((e)=>{
                console.log('获取电台推荐失败')
              });
              //推荐节目
              this.$http.get('/program/recommend',{
                params:{},
              }).then((req)=>{
              this.programs = req.data.programs;
			         // console.log(req)
			         // console.log(this.programs.id)
              }).catch((e)=>{
                console.log('获取电台推荐节目失败')
              });
        }
    },
    mounted(){
      this.getdiantai();
    }
  }
</script>

<style>
  .tuijianjiemu{
    float: left;
    width: 600px;
    list-style: none;
  }
  .zhibodiantai{
    width: 1000px;
    margin: auto;
  }
  .tuijian{
    width: 1000px;
    height: 500px;
    margin: auto;
  }
  .tupiao{
    width: 40px;
    height: 40px;
    background-color: aqua;
  }
  .datu{
    height: 260px;
    /* overflow: hidden; */
    display: flex;
  }
.datu-tuijian{
   display: flex;
   margin: auto;

}
  .mingzi{
    float: left;
    margin-left: 20px;
    list-style: none;
  }
  .li{
    list-style: none;
    }
  .nihao{
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  .geshi{
    width: 80px;
    margin-top: 30px;

  }
  .juzhong{
    text-align: center;
  }
  .jiemu{
    width: 440px;
    height: 50px;
    /* background-color: red; */
  }
  .tjnr{
    width: 440px;
    height: 500px;
    border: 1px solid #ccc;
    border-top: 2px solid #C20C0C;
    margin-top: -10px;
    padding: 20px 10px;
    /* margin-right: 10px; */
  }
  .youbian{
    margin-left: 70px;
  }
  .jiemutouxiang{
    width: 40px;
    height: 40px;
    float: left;
    margin-right: 10px;
  }
  .tuijianwenzi{
    margin-left: 10px;
    /* width: 20px; */
    float: left;
  }
  .zuozhe{
    font-size: 12px;
    color: #999;
    margin-top: 1px;
  }
  .tag{
    float: right;
    border: 1px solid #999;
    font-size: 12px;
  }
</style>
