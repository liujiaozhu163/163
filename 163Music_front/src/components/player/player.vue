<template>
  <div>
    <div> <audio :src="songSrc" autoplay ref='audio'></audio> <br><br> <br></div> <!-- controls -->
    <div class="wei">

      <div class="container ">
        <div class='player'>
          <el-row>
            <el-col :span="1"><span class="el-icon-caret-left sizep" @click="upSong($store.state.info[count].id)"></span></el-col>
            <el-col :span="1"><span class="sizep" :class="tubiao" @click=" paused_f"></span></el-col>
            <!-- el-icon-video-play-->
            <el-col :span="1"> <span class="el-icon-caret-right sizep" @click="downSong($store.state.info[count].id)"></span></el-col>
            <el-col :span="2">
              <img :src="mPicUrl" alt="图" height="50">
            </el-col>
            <el-col :span="9">
              <p class="pull-left">{{mName}}</p>
              <div @click="progress">
                <el-progress ref="progress" :text-inside="true" :stroke-width="15" :percentage="percentage" status="exception">
                </el-progress>
              </div>

            </el-col>
            <el-col :span="4" class="time">{{ setTime(currentTime) }} / {{setTime(duration)}}</el-col>
            <el-col :span="2" class="time">
              <v-tempsong></v-tempsong>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import TempSong from '@/components/player/tempSong'
  import {
    mapState
  } from 'vuex'
  export default {
    name: "player",
    components: {
      "v-tempsong": TempSong
    },
    data() {
      return {
        songSrc: '',
        duration: '0',
        currentTime: '0',
        percentage: '0',
        paused: '',
        tubiao: 'el-icon-video-pause',
        alInfo: {},
        info: [],
        count: 0,
        mPicUrl: "",
        mName: "歌名"
      }
    },
    created() {
      //在页面加载时读取localStorage状态 复制对象是解决新vuex管理的状态中新添加的字段也可以存入localStorage中
      localStorage.getItem("alInfo") && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(
        localStorage.getItem("alInfo"))));
      //在页面刷新时将vuex里的信息保存到localStorage里，避免多次调用localStorage进行存储降低性能,beforeunload是在页面刷新之前调用
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("alInfo", JSON.stringify(this.$store.state))
      })
    },
    computed: {
      ...mapState({
        //alinfo: state => state.alInfo,
        alInfo_name: state => state.alInfo.name || "aa",
        alInfo_id: state => state.alInfo.id || "aa",
        alInfo_picUrl: state => state.alInfo.al.picUrl || "aa",
      })
    },
    watch: {
      alInfo_id: function(val) {
        this.getSong(val)
      }
    },
    mounted() {
      console.log(this.$store.state.alInfo);
    },
    methods: {
      progress() {
        let aud = this.$refs.audio
        aud.currentTime = this.currentTime = this.percentage = (event.offsetX / event.target.offsetWidth) * this.duration |
          0
      },
      getSong(alInfo_id) {
        this.$http.get('/song/url', {
          params: {
            id: alInfo_id
          }
        }).then(req => {
          this.mPicUrl = this.alInfo_picUrl
          this.mName = this.alInfo_name
          this.success(req)
        }).catch(err => {
          this.$notify.error({
            title: '错误',
            message: '歌曲播放失败',
            position: 'bottom-right'
          });
        })
      },

      //共同做的
      success(req) {
        let aud = this.$refs.audio
        this.paused = aud.paused;
        this.songSrc = req.data.data[0].url
        aud.oncanplay = () => {
          this.duration = aud.duration;
          setInterval(() => {
            this.currentTime = aud.currentTime;
            this.percentage = ((this.currentTime * 100 | 0) / (this.duration | 0)) | 0
            if (aud.currentTime == aud.duration) {
              this.autoNext(this.$store.state.info[this.count].id)
            }
          }, 200)
        }
      },


      //上一首
      upSong(info_id) {
        this.count = this.count - 1
        if (this.count < 0) {
          this.count = 0;
        }
        info_id = this.$store.state.info[this.count].id
        this.$http.get('/song/url', {
          params: {
            id: info_id
          }
        }).then(req => {
          this.mPicUrl = this.$store.state.info[this.count].url
          this.mName = this.$store.state.info[this.count].name
          this.success(req)

        }).catch(err => {
          this.$notify.error({
            title: '错误',
            message: '上一曲错误',
            position: 'bottom-right'
          });
        })
      },

      //下一首
      downSong(info_id) {
        this.count = this.count + 1
        if (this.count >= this.$store.state.info.length) {
          this.count = 0;
        }
        info_id = this.$store.state.info[this.count].id
        this.$http.get('/song/url', {
          params: {
            id: info_id
          }
        }).then(req => {
          this.mPicUrl = this.$store.state.info[this.count].url
          this.mName = this.$store.state.info[this.count].name
         // this.success(req)
        }).catch(err => {
          this.$notify.error({
            title: '错误',
            message: '下一曲错误',
            position: 'bottom-right'
          });
        })
      },
      //暂停
      paused_f() {
        if (this.paused) {
          this.$refs.audio.play();
          this.tubiao = "el-icon-video-pause"
          this.paused = false
        } else {
          this.tubiao = "el-icon-video-play"
          this.$refs.audio.pause();
          this.paused = true;
        }

      },
      autoNext(id) {
        this.downSong(id)
      },

      setTime(t) {
        let time = new Date(t * 1000)
        return time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0')
      }
    }
  }
</script>

<style>
  .wei {
    width: 100%;
    height: 50px;
    text-align: center;
    background: #292929;
    color: #FFFFFF;
    position: fixed;
    bottom: 0;
  }

  .sizep {
    font-size: 30px;
    line-height: 50px;
  }

  .player img {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    border-radius: 5px;
  }

  .time {
    line-height: 50px;
  }
</style>
