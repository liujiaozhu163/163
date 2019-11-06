<template>

  <div class="xiangqing">
   <div class="xiang1">
      <el-row :gutter="20">
          <el-col :span="20" :offset="0">
                <el-row>
                  <el-col :span="4" >
				  <div class="touxiang">
                   <el-image :src="program.coverUrl"></el-image>
                  </div>
				  </el-col>
                    <el-col :span="20" :push="2">
                      <div class="youbian">
						  <div class="youbian1">
                        <span class="diantaijiemu">电台节目：</span>
						<span>{{program.name}}</span>
						 </div>
                        <i class="el-icon-s-opportunity"></i>{{program.radio.name}}
                        <el-button type="info" class="dingyue" plain><i class="el-icon-star-off">订阅</i>（{{program.radio.subCount}}）</el-button>
                      </div>
                    </el-col>
                </el-row>
          </el-col>
      </el-row>
	  </div>
      <div class="anniu">
        <el-button size="medium" type="primary"><i class="el-icon-video-play">播放</i>（{{getshijian(program.radio.subCount)}}）</el-button>
        <el-button size="medium" type="info" plain><i class="el-icon-thumb"></i>（{{program.likedCount}}）</el-button>
        <el-button size="medium" type="info" plain><i class="el-icon-s-comment"></i>（{{program.commentCount}}）</el-button>
        <el-button size="medium" type="info" plain><i class="el-icon-share"></i>（{{program.shareCount}}）</el-button>
        <el-button size="medium" type="info" plain><i class="el-icon-download"></i>下载</el-button>
      </div>
      <div>
        <span class="qinggan">{{program.radio.category}}</span>
        <span>{{program.radio.name}}</span>
        <span class="chuangjian">{{getTime(program.createTime)}}创建</span>
        <span class="chuangjian">播放:{{program.listenerCount}}次</span>
      </div>
      <div class="jieshao">
        介绍：<br>
        {{program.description}}
      </div>
	 <!-- 歌曲的列表 -->
      <div class="liebiao biaotou">
        <div class="liebiao1" v-if="">节目包含的歌曲列表</div>
            <table width="100%" class="liebiao">
                <tr height="30px" v-for="(items,index) in songs" :key="index">
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
                     {{getTimes(items.mMusic.playTime)}}
                  </td>
                  <td width="100px">
                    {{items.artists[0].name.substring(0,10)+"..."}}
                  </td>
                  <td width="170px">
                    {{items.album.name.substring(0,15)+"..."}}
                  </td>
                </tr>
            </table>
      </div>
  </div>
</template>

<script>
  export default{
    name:'xiangqing',
    data(){
      return{
        tableData:[],
       program:[],
       songs:[]
      }
    },
    methods:{
		//转化分秒
		getTimes(time){
		   let now = new Date(time);
			return ((now.getMinutes())>= 10 ? now.getMinutes() : '0' + now.getMinutes())+" : "+((now.getSeconds())>= 10 ? now.getSeconds() : '0' + now.getSeconds());
		},
		getshijian(time){
			let now = new Date(time);
			return ((now.getMinutes())>= 10 ? now.getMinutes() : '0' + now.getMinutes())+"分"+((now.getSeconds())>= 10 ? now.getSeconds() : '0' + now.getSeconds())+"秒";
		},
		//转化时间年月日
		getTime(t){
			let now = new Date(t);
			// return now.toLocaleString();//这个是将毫秒数转化成中国标准时间
			return now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
		},
		//获取数据
      getxingqing(){
        this.$http.get('/dj/program/detail',{
          params:{
            id:this.$route.params.id
          },
        }).then((req)=>{
        this.program = req.data.program;
        this.songs = req.data.program.songs;
        console.log(req)
        }).catch((e)=>{
          console.log('获取电台节目详情失败')
        });
		this.$http.get('/dj/detail',{
		  params:{
		    rid:this.$route.params.id
		  },
		}).then((req)=>{
		this.program = req.data.program;
		this.songs = req.data.program.songs;
		console.log(req)
		}).catch((e)=>{
		  console.log('获取电台节目详情失败')
		});
		
      }
    },
    mounted(){
      this.getxingqing();
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
  .chuangjian{
     margin: 0 30px;
	 color: #999999;
	 font-size: 12px;
    }
    .liebiao{
      font-size: 12px;
      color: #333333;
      /* border: 1px solid #d9d9d9; */
      border-top:1px solid #d9d9d9 ;
    }
    .tubiao{
      font-size: 22px;
    }
    .biaotou{
      color: #000;
      font-size: 16px;
      margin-top: 20px;
      border: 1px solid #d9d9d9;
    }
    .liebiao1{
      height: 30px;
      padding-left:10px;
      line-height: 30px;
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
	  .youbian1{
		  display: flex;
		  margin-top: 20px;
		  margin-bottom: 20px;
	  }
	  .dingyue{
		  margin-left: 20px;
	  }
	  .xiang1{
		  margin: 20px 0;
	  }
	  .touxiang{
		  width: 145px;
		  height: 145px;
		  border: 1px solid #d9d9d9;
		  padding: 5px 5px;
	  }
	  .anniu{
		  margin: 30px 0;
	  }
	  .jieshao{
		  font-size: 12px;
		  color: #666;
		  margin-top: 12px;
		  width: 300px;
	  }
</style>
