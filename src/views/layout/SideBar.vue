<template>
  <div>
    <div class="logo">
      <!-- <i class="icon-logo" style="font-size:60px;display:block;margin:30px 0;"></i> -->
      <a href="/map">
        <img src="/static/images/logo.png" alt="logo" width="110">
      </a>
    </div>
    <el-menu
      ref="sideMenu"
      router unique-opened 
      class="el-menu-vertical-demo slide" 
      background-color="#0090aa" 
      text-color="#fff" 
      active-text-color="#00a9c8"
      :default-active="defaultActive"
      @open="setMenuOpen"
      @select="setActiveMenu"
    >
      <el-submenu :index="'' + i" v-for="(item, i) in data" :key="i" v-show="item.sonLength == 1">
        <template slot="title">
          <div class="submenu-title">
            <i class="el-icon-menu" v-if="item.id ==21"></i>
            <i class="el-icon-user" v-if="item.id ==23"></i>
            <i class="el-icon-s-tools" v-if="item.id ==25"></i>
            <i class="el-icon-s-custom" v-if="item.id ==24"></i>
            <span>{{item.name}}</span>
          </div>
        </template>
        <el-menu-item-group v-for="(item2, j) in item.children" :key="j">
          <el-menu-item :index="item2.path">
            {{item2.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  props:{
    data: {
      type: Array,
      default: []
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  data(){
    return { }
  },
  mounted(){},
  methods:{
    // 父菜单点击事件
    setMenuOpen(index) {},
    // 子菜单点击事件
    setActiveMenu(path) {},
  },
}
</script>
<style lang="scss" scoped>
.logo {
  height: 140px;
  text-align: center;
  a {
    text-align: center;
    display: inline-block;
    width: 110px;
    height: 110px;
    background-color: #000000;
    border-radius: 55px;
    margin-top: 15px;
  }
  .icon-logo:before {
    color: #0090aa;
  }
  .logo-title{
    font-size: 16px;
    color: #fff;
  }
}
.is-opened .submenu-title {
  color: #fff;
  i {
    color: #fff;
  }
  background-color: #0090aa !important;
}
</style>