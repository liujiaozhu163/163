<template>
	<div class="youxiu"> 
		<!-- {{this.$route.params.id}} -->
		<div class="ziti">优秀新电台</div>
		<div class="zuida">
			<div class="diantai" v-for="(items,index) in djRadios" v-if="index < 5" :key="index">
				<router-link :to="{name:'diantai',params:{id:items.id}}">
				<el-image class="tupian" :src="items.picUrl"></el-image>
				<div class="xiaozi">{{items.name}}</div>
				</router-link>
				<div class="zi">{{items.rcmdtext}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'youxiu',
		props:['id'],
		data(){
		  return{
			djRadios:[]
			}
		},
		watch:{
			id:function(v){
				console.log(v);
				this.getyouxiu(v);
			}
		},
		methods:{
			getyouxiu(id){
				this.$http.get('/dj/recommend/type',{
				  params:{
				    type:id
				  },
				}).then((req)=>{
				this.djRadios = req.data.djRadios;
				console.log(req)
				}).catch((e)=>{
				  console.log('获取电台图标分类详情失败')
				});
			}
		},
		mounted(){
			console.log(this.id);
		}
	}
</script>

<style>
	.youxiu{
		width: 980px;
		margin: auto;
	}
	.tupian{
		width:150px;
		height: 150px;
	}
	.diantai{
		width: 150px;
		height: 219px;
	}
	.zuida{
		display: flex;
		justify-content: space-between;
		border-top: 2px solid #C20C0C;
		padding-top: 15px;
	}
	.xiaozi{
		font-size: 14px;
		color: #333;
		margin: 8px 0;
	}
	.zi{
		font-size: 12px;
		color: #999;
	}
	.ziti{
		font-size: 24px;
		color: #333333;
		margin-bottom: 5px;
	}
</style>
