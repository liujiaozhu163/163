<template>

  <div class="xiangqing">
  <div class="xiang1">
      <el-row :gutter="20">
          <el-col :span="20" :offset="0">
                <el-row>
                  <el-col :span="4" >
				  <div class="touxiang">
                   <el-image class="touxiang2" :src="djRadio.picUrl"></el-image>
                  </div>
				  </el-col>
                    <el-col :span="20" :push="1">
                      <div class="youbian2">
						  <div class="youbian1">
                        <span class="diantaijiemu">电台：</span>
						<span>{{djRadio.name}}</span>
						 </div>
						 <div class="xinxi">
							 <el-image class="touxiang1" :src="djRadio.dj.avatarUrl"></el-image>
							 <span class="mingzi">{{djRadio.dj.nickname}}</span>
						
						 </div>
						 <div class="dingyue1">
							  <el-button size="medium" type="primary">
								  <i class="el-icon-star-off">订阅</i>({{djRadio.subCount}})</el-button>
								<el-button size="medium" >
								<i class="el-icon-video-play">播放全部</i></el-button> 
								 <el-button size="medium">
								 <i class="el-icon-share">分享</i></el-button>
						 </div>
						 <div>
							 <span class="qinggan">{{djRadio.category}}</span>
							 <span class="jieshao">{{djRadio.desc}}</span>
						 </div>
                      </div>
                    </el-col>
                </el-row>
          </el-col>
      </el-row>
	  </div>
      <div class="">
        <div class="jiemu11"><h3>节目列表</h3></div>
		<div>
			<table width="100%" class="liebiao233">
			     <tr height="30px" v-for="(items,index) in programs" :key="index">
			       <td width="30px" class="shuzi">
			         {{index+1}}
			       </td>
			       <td width="30px">
			         <i class="el-icon-video-play tubiao"></i>
			       </td>
			       <td width="400px">
			          {{items.name}}
			       </td>
				   <td width="100px">
					   播放 {{items.listenerCount}}
				   </td>
			     <td width="100px">
			          赞 {{items.likedCount}}
			       </td> 
			       <td width="100px">
			         {{ getTime( items.createTime )}}
			       </td>
			       <td width="120px">
			         {{getshijian(items.mainSong.lMusic.playTime)}}
			       </td>
			     </tr>
			 </table>
		</div>
      </div> 
  </div>
</template>

<script>
  export default{
    name:'diantai',
    data(){
      return{
       djRadio:[],
	   programs:[]
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
      getdiantai(){
		this.$http.get('/dj/detail',{
		  params:{
		    rid:this.$route.params.id
		  },
		}).then((req)=>{
		this.djRadio = req.data.djRadio;
		}).catch((e)=>{
		  console.log('获取电台详情失败')
		});
		this.$http.get('/dj/program',{
		  params:{
		    rid:this.$route.params.id
		  },
		}).then((req)=>{
		this.programs = req.data.programs;
		}).catch((e)=>{
		  console.log('获取电台节目失败')
		});
      }
    },
    mounted(){
      this.getdiantai();
    }
  }
</script>

<style>
  .xiangqing{
    width: 900px;
    margin: auto;
	padding: 10px 30px;
	border: 1px solid #d9d9d9;
  }
  .qinggan{
    border: 1px solid #C20C0C;
    font-size: 12px;
    color: #C20C0C;
    margin-right: 30px;
  }
    .liebiao233{
      font-size: 12px;
      color: #333333;
	  border: 1px solid #d9d9d9;
      border-top:2px solid #C20C0C ;
    }
    .tubiao{
      font-size: 22px;
    }
      .shuzi{
        text-align: center;
      }
	  .diantaijiemu{
		  display: block;
		  width: 90px;
		  height: 30px;
		  background-color: #C20C0C;
		  border-top-right-radius: 15px;
		  border-bottom-right-radius: 15px;
		  line-height: 30px;
		  text-align: center;
		  margin-right: 10px;
		  float: left;
		  
	  }
	  .youbian2{
		  width: 500px;
		  margin-left: 90px;
		  
	  }
	  .youbian1{
		  display: flex;
		  margin-top: 5px;
		  margin-bottom: 20px;
	  }
	  .dingyue{
		  margin-left: 20px;
	  }
	  .xiang1{
		  margin: 20px 0;
	  }
	  .touxiang{
		  width: 200px;
		  height: 200px;
		  border: 1px solid #d9d9d9;
		  padding: 5px 5px;
	  }
	  .anniu{
		  margin: 30px 0;
	  }
	  .jieshao{
		  font-size: 12px;
		  color: #666;
		  width: 300px;
	  }
	  .touxiang1{
		  width: 40px;
		  float: left;
	  }
	.mingzi{
		  display: inline-block;
		  margin-left: 20px;
		  margin-top: 10px;
		  color: #0c73c2;
		  font-size: 12px;
	}
	.xinxi{
		  height: 40px;
		  width: 200px;
	}
	.touxiang2{
		width:200px;
		height: 200px;
	}
	.dingyue1{
		margin: 20px 0;
	}
	.jiemu11{
		margin-bottom: 10px;
	}
</style>
