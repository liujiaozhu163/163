
<template>

	<div class="fenlei">
		<el-select v-model="value" placeholder="选择分类">
			   <el-option
				      v-for="(item,index) in selectDate"
				      :key="index"
				      :label="item.name"
				      :value="item.name">
				    </el-option>
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

  .fenlei{
    margin-left:10px;
  }
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
  .el-popper {
      height: auto !important;
      overflow: auto  !important;
  }
</style>
