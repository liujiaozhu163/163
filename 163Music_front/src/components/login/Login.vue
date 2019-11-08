<template>
  <div class="login">
    <div v-if="this.$store.state.isLogin">
      <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
    </div>
        <!-- 登录后触发显示下拉-->
       <div v-else>
           <el-dropdown @command="loginOut">
             <span class="el-dropdown-link">
               <el-avatar :src="avatarUrl"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
             </span>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item command="a">
                 <router-link :to="{name:'gerenxinxi',params:{id:userId}}">
                 我的主页
                 </router-link>
                 </el-dropdown-item>
               <el-dropdown-item command="b">我的等级</el-dropdown-item>
               <el-dropdown-item command="c">我的消息</el-dropdown-item>
               <el-dropdown-item command="c">VIP会员</el-dropdown-item>
               <el-dropdown-item command="d">退出</el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>

         </div>

      <el-dialog
        title="用户登录"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic">

        <el-form-item
          prop="tel"
          label="手机号"
          :rules="[
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ]"
        >
          <el-input v-model="form.tel"></el-input>
        </el-form-item>

        <el-form-item
          prop="password"
          label="密码"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]"
        >
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('from')">登录</el-button>
          <el-button @click="resetForm('from')">重置</el-button>
        </el-form-item>
      </el-form>
      </el-dialog>
  </div>
</template>

<script>
 import {mapState} from 'vuex'

  export default{
    name:'login',
    data(){
        return{
          isLogin:true,
          userInfo:{},
             form:{
               tel:'',
               password:''
             },
              centerDialogVisible: false
            }
          },
        created() {
        //在页面加载时读取localStorage状态 复制对象是解决新vuex管理的状态中新添加的字段也可以存入localStorage中
        localStorage.getItem("userInfo") &&  this.$store.replaceState( Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userInfo"))));
            //在页面刷新时将vuex里的信息保存到localStorage里，避免多次调用localStorage进行存储降低性能,beforeunload是在页面刷新之前调用
          window.addEventListener("beforeunload",()=>{
              localStorage.setItem("userInfo",JSON.stringify(this.$store.state))
          })
    },
    computed:{
      ...mapState({
        nickname:state=> state.userInfo.nickname,
        userId:state=> state.userInfo.userId,
        avatarUrl:state=> state.userInfo.avatarUrl
      })
    },

        methods: {
         submitForm(formName) {
           //验证数据
              if(this.form.tel.trim() == '' || this.form.password.trim() == ''){
                return;
              }
              this.$http.get('/login/cellphone',{
               params:{
                 phone: this.form.tel,
                 password:this.form.password
               },
               withCredentials: true
              }).then(data=>{
                this.centerDialogVisible=false;
                this.$store.dispatch("setuserInfo",data.data.profile)
                this.$notify({
                  title: '成功',
                  message: '登录成功',
                  type: 'success',
                  position: 'bottom-right'
                });
              }).catch(err=>{
               this.$notify.error({
                 title: '登录失败',
                 position: 'bottom-right'
               });
              });

              },
              resetForm(formName) {
                this.$refs[formName].resetFields();
              },
              loginOut(command){
                if(command == 'd'){
                  this.$http.get('/logout').then(req=>{
                    console.log('退出');
                    this.$store.state.isLogin=true;
                    this.$store.state.userInfo=null;
                    localStorage.clear();
                    this.$router.push({name:'/',component:'Home'})
                  }).catch(err=>{
                    console.log('退出失败');
                  });
                }
              }
            }
     }

</script>

<style>
</style>
