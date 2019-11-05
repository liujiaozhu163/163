<template>
  
  <div class="End">
		<div class="End-left">
			<ul>
				<li>服务条款</li>
				<li>隐私政策</li>
				<li>儿童隐私政策</li>
				<li>版权投诉指引</li>
				<li>意见反馈</li>
			</ul>
			<P>网易公司版权所有@1997-2019 杭州乐读科技有限公司运营：浙网文[2018]3506-263号</P>
			<p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
		</div>
		
		<div class="End-right">
			<img src='../../assets/163music.png' />
		</div>
  
  </div>
</template>

<script>
  
  export default{
    name:'end'
  }
</script>

<style>
	.End{
		width:100%;
		height:150px;
		border:0.5px solid #B6ACAC;
		background: #F6F3F3;
		margin-top:50px;
		
	}
	.End-left{
		width:680px;
		height:150px;
		/* border:1px solid #B6ACAC; */
		float:left;
		margin-left: 460px;;
	}
	.End-left ul{
		margin-top:20px;
		margin-left:-50px;
		
	}
	.End-left li{
		
		display:inline;
		margin:10px;
		padding-right:15px;
		border-right: 1px solid #B6ACAC;
		color:#B6ACAC;
		font-size:13.3px;
	}
	.End-left p{
		font-size:13.3px;
		margin-top:-10px;
	}
	.End-right{
		width:450px;
		height:150px;
		/* border:1px solid #B6ACAC; */
		float:left;
		padding-top:20px;
	}
	.End-right img{
		width:400px;
		height:80px;
		background:#F7F4F4 ;
	}
</style>
