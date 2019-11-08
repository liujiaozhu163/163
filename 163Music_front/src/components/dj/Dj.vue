<template>
  <div class="zhibodiantai">
   <!-- 最上面的图标分类 -->
    <div class="datu">
       <ul class="datuFlex">
         <li class="datuItems" v-for="(items,index) in categories" v-if="index < 18" :key="index">
			 <!-- <router-link :to="{name:'youxiu',params:{id:items.id}}"> -->
           <div class="" @click="getYouxiu(items.id)">
             <el-image class="nihao" :src="items.picUWPUrl">
              </el-image>
            <div class="">{{items.name}}</div>
           </div>
		   <!-- </router-link> -->
         </li>
       </ul>
    </div>
	<!-- 放一个组件 就是跳转图标的详情  和分类-->
	<v-youxiu :id="id"></v-youxiu> 
	
	
	

  <div class="datu-tuijian">
    <!-- 推荐的节目 -->
    <div class="tuijain">
	 <router-link to="/gengduo">
      <h3 style="color: #333333;">{{jian}} 
	  <span class="geng">更多></span>
	  </h3>
	 </router-link>
       <div class="tjnr">
              <div class="jiemu" v-for="(items,index) in programs" :key="index">
                <router-link :to="{name:'xiangqing',params:{id:items.radio.lastProgramId}}">
                <div class="jiemutouxiang"><el-image :src="items.radio.picUrl">
                 </el-image></div>
                <div class="tuijianwenzi ziyanse">
                  <el-link class="" style="color:#333333" type="info">{{items.mainSong.name.substring(0,18)}}</el-link><br>
                  <p class="zuozhe"><el-link class="zuozhe" type="info">{{items.radio.name}}</el-link></p>
                </div>
                <div class="tag ziyanse">{{items.radio.category}}</div>
                </router-link>
              </div>
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
           <div class="tuijianwenzi ziyanse">
            
			 <el-link class="" style="color:#333333" type="info"> {{items.rcmdtext}}</el-link><br>
			 <p class="zuozhe"><el-link class="zuozhe" type="info">{{items.name}}</el-link></p>
			 
           </div>
           <div class="tag ziyanse">{{items.category}}</div>
            </router-link>
         </div>
       </div>
    </div>
  </div>
  </div>
</template>

<script>
import Youxiu from '@/components/dj/Youxiu.vue' 
  export default{
    name:'dj',
    components:{
    'v-youxiu':Youxiu
    },
    data(){
      return{
        msg:'热门电台',
        tui:'电台推荐',
        jian:'推荐节目',
        categories:[],
        djRadios:[],
        djRadiosone:[],
        programs:[],
		id:''
      }
    },
    methods:{
		
		getYouxiu(id){
			this.id = id;
		},
        getdiantai(){
              //图片电台分类
              this.$http.get('/dj/catelist').then((req)=>{
              this.categories = req.data.categories;
			  this.id = this.categories[0].id
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
	
	*{
		margin: 0;
		padding: 0;
	}
	
	.datuFlex{
		display: flex;
		flex-wrap: wrap;
		margin-top: 30px;
	}
	.datuItems{
		width: 105px;
		height: 105px;
		list-style-type: none;
		justify-content: space-between;
		text-align: center;
	}
  .zhibodiantai{
    width: 970px;
	border: 1px solid #D9D9D9;
	padding: 10px 30px;
    margin: auto;
  }
  .tuijian{
    width: 1000px;
    height: 500px;
    margin: auto;
  }
  .datu{
    height: auto;
	width: 980px;
    display: flex;
	justify-content: space-between;
	margin-left: 0px;
	/* margin: auto; */
  }
.datu-tuijian{
   display: flex;
   margin: auto;
   margin-top: 30px;

}
  .li{
    list-style: none;
    }
  .nihao{
    width: 50px;
    height: 50px;
    margin-left: 10px;
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
    margin-top: 10px;
    padding: 20px 10px;
	font-size: 12px;
	color: #333333;
  }
  .ziyanse{
	  color: #333333;
  }
  .youbian{
    margin-left: 40px;
  }
  .jiemutouxiang{
    width: 40px;
    height: 40px;
    float: left;
    margin-right: 10px;
  }
  .tuijianwenzi{
    margin-left: 10px;
    float: left;
	color: #333333;
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
  .geng{
	  float: right;
	  font-size: 12px;
	  margin-top: 12px;
  }
</style>
