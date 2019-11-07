<template>
	<div class="gengduo">
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
</template>

<script>
	export default{
		name:'gengduo',
		data(){
			return{
				programs:[]
			}
		},
		methods:{
			getgengduo(){
				this.$http.get('/dj/hot',{
				  params:{},
				}).then((req)=>{
				this.djRadios = req.data.djRadios;
				console.log(this.djRadios)
				}).catch((e)=>{
				  console.log('获取电台信息失败2222')
				});
			}
		},
		mounted() {
			this.getgengduo();
		}
		
	}
</script>

<style>
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
</style>
