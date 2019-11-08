<template>
	<nav>
		<ul class="navbar">
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
	        <button class="button">搜索</button>
	    </li>
	    <li>
	    	<a href="#">创作者中心</a>
	    </li>
      <li class='pull-right'>
        <v-login></v-login>
      </li>
		</ul>
	</nav>
</template>

<script>
    import Login from '@/components/Login/Login.vue'
	export default{
	  name:'nav1',
	  data(){
	    return{

	    }
	  }
    ,
    components: {
      'v-login': Login
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
		line-height: 80px;
    margin:0 25px;
	}
	.navbar li a{
		color: #FFF;
		text-decoration: none;


	}
	.mingcheng{
	  font-size: 30px;
	}
	.button{
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
