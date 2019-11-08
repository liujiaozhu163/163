
<template>
	
	<div class="fenlei">
		<el-select v-model="value" placeholder="选择分类">
		<!-- <el-option-group
			  v-for="(item,index) in categories"
			  :key="index"
			  :label="item.name"> -->
			   <el-option
				      v-for="(item,index) in selectDate"
				      :key="index"
				      :label="item.name"
				      :value="item.name">
				    </el-option>
			<!-- </el-option-group> -->
		</el-select>	  
	</div>
</template>
<script>
	  export default {
	     data() {
	       return{
			selectDate:[],
			value:''
	         
	        }
		},
		methods:{
			getFenlei(){
				this.$http.get('/playlist/catlist').then(da=>{
				console.log(da.data.sub);
				this.selectDate = da.data.sub;
				}).catch(c=>{
					console.log("歌单分类获取失败");
				});
			}
		},
		mounted(){
			this.getFenlei();
		}
	  }        
</script>

<style>
.text {
	font-size: 14px;
  }

  .item {
	margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
	display: table;
	content: "";
  }
  .clearfix:after {
	clear: both
  }

  .box-card {
	width: 480px;
  }
</style>
     