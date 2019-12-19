<template>
  <div class="head-nav">
    <h2>vue项目初始化模板</h2>
    <div>
      <span class="nav-sys">
        <span>
         <i class="el-icon-s-custom"></i>
        </span>
        <span>
          {{userName}}
        </span>
      </span>
      <span class="nav-sys" @click="logout">
        <span>
          <img class="logout-img" src="@/assets/images/tuichu.png"/>
        </span>
        <span>
          退出
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { logout } from '@/api/login'
export default {
  name: 'headerbar',
  props:{},
  data(){
    return {
      userName: '用户名'
    }
  },
  mounted(){
    // this.userName = window.sessionStorage.userName;
  },
  methods:{
    logout() {
      // logout().then(res => {
      //   if(res.data.code == 1) {
      //     this.$store.commit('CLEAR_USERINFO')
      //     this.$store.commit('clear_navState')
          this.$router.push('/login')
      //   }
      // })
    }
  },
}
</script>
<style lang="scss" scoped>
  .head-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      line-height: 60px;
    }
  }
  .nav-sys {
    line-height: 18px;
    margin-right: 20px;
    cursor: pointer;
    span {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      i{
        font-size:18px;
        color: #606266;
      }
    }
  }
  .logout-img{
    width: 17px;
    height: 17px;
    vertical-align:text-bottom;
  }
</style>