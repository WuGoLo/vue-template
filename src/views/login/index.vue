<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <i class="icon-logo" style="font-size:90px;"></i>
      </div>
      <div class="title-container">
        <h3 class="title">中心局退休职工管理系统</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <i class="el-icon-user"></i>
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="登录名" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container svg-container_login">
          <i class="el-icon-unlock"></i>
        </span>
        <el-input :type="passwordType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="密码" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <i class="el-icon-view"/>
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:330px;margin-bottom:20px;height:40px;border-radius: 40px;" @click.native.prevent="handleLogin">登录</el-button>
      <el-checkbox v-model="rememberMe" @change="pitchOn" style="margin-bottom:20px;">自动登录</el-checkbox>
    </el-form>

  </div>
</template>

<script>
  import { login } from '@/api/login'
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          rememberMe:''
        },
        loginRules: {
          username: [{ required: true, message: '登录名不允许为空', trigger: 'blur' }],
          password: [
            { required: true, message: '密码不允许为空', trigger: 'blur' }
          ]
        },
        passwordType: 'password',
        loading: false,
        rememberMe: false
      }
    },
    watch: {
      $route: {
        handler: function(route) {},
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      handleLogin() {
        if (this.rememberMe) {
          this.loginForm.rememberMe = 1;
        } else {
          this.loginForm.rememberMe = 0;
        }
        // login(this.loginForm).then(res => {
        //   if(res.data.code == 1) {
            // this.$message.success('登录成功！');
            // this.$store.dispatch('setUserInfo', res.data.data)
            // window.sessionStorage.setItem('userName', res.data.data.userName)
            this.$router.push('/lmap/leaflet')
          // } else {
          //   this.$message.error(res.data.msg)
          // }
        // })
      },
      // 记住密码
      pitchOn(val) {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $color:#0090aa;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    background-image: url("../../assets/images/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      background-color: #fff;
      border-radius: 3px;
    }
    .svg-container {
      padding: 6px 5px 0px 15px;
      color: $color;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        i{
          font-size: 22px;
        }
      }
    }
    .title-container {
      text-align: center;
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: #0090aa;
        margin: 20px auto 30px auto;
        text-align: center;
        font-weight: bold;
      }
      .icon-logo:before {
          color: #0090aa;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $color;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
