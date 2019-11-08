<template>
	<nav>
		<ul class="navbar">
			 <div class="demo-type">
			    
			    <!-- <div>
			      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
			    </div> -->
			   
			  </div>
			<div class="icon">
			<img src="../../assets/网易云图标.png">
			</div>
	    <li>
	        <a href="#" class="mingcheng">163.music</a>
	    </li>
			<li>
				<a href="#">发现音乐</a>
			</li>
			<li>
				<a href="#">朋友</a>
			</li>
			<li>
				<a href="#">商城</a>
			</li>
			<li>
				<a href="#">音乐人</a>
			</li>
	    <li>
	    	<a href="#">下载客户端</a>
	    </li>
	    <li>
	    	<input type="text" value="音乐/视频/电台/用户">
			<!-- <input type="text" value="搜索"> -->
	        <button>搜索</button>
	    </li>
	    <li>
	    	<a href="#">创作者中心</a>
	    </li>
		</ul>
	</nav>
</template>

<script>
	export default{
	  name:'nav1',
	  data(){
	    return{
	
	    }
	  }
	  }
</script>

<style>
	nav{
		width: 100%;
		height: 80px;
		background: #000;
	}
	.navbar{
		width: 1200px;
		margin: auto;
		overflow: auto;
	}
	.navbar li{
		float: left;
		list-style-type: none;
		line-height: 56px;
	}
	.navbar li a{
		color: #FFF;
		text-decoration: none;
	
	
	}
	.icon img{
		border-radius:16px;
		width:32px;
		height:32px;
		margin-right:-32px;
	}
	.icon{
		margin-right:-20px;
	}
	
	.mingcheng{
	  font-size: 30px;
	}
	button{
		 line-height: 30px;
		    width:45px;
			height:32px;
			 border-radius: 20px;
			background: #cc0404e8;
			padding:0;
			font-size:13px;
		}
	.navbar li input{
	  width:160px;
	  height:30px;
	  border-radius: 20px;
	  line-height: 30px;
	  font-size:13px;
	}
	/* .navbar li button{
		color:#fd2300;
		height:30px;
		margin-top: 10px;
	}
	 */
	
</style>
