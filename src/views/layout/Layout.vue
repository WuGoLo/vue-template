<template>
  <el-container class="home">
    <el-aside>
      <Side-bar :data="menuArr" :defaultActive="activePath"></Side-bar>
    </el-aside>
    <el-container class="content">
      <el-header class="nav-header">
        <Header-bar></Header-bar>
      </el-header>
      <el-main>
        <div class="main-box">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, i) in breadArr" :key="i">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>  
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { HeaderBar, SideBar } from './middle';
export default {
  components: { HeaderBar, SideBar },
  data() {
    return {
      activePath: '',
      breadArr: [],
      menuArr: [
        {
          "children": [
            {
                "access": "list_access",
                "children": null,
                "hasSub": 0,
                "id": 255,
                "name": "Leaflet地图",
                "path": "/lmap/leaflet",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 25,
          "name": "超图地图",
          "path": "/lmap",
          "showMenu": 1,
          "url": null
        },
        {
          "children": [
            {
                "access": "list_access",
                "children": null,
                "hasSub": 0,
                "id": 245,
                "name": "classic地图",
                "path": "/cmap/classic",
                "showMenu": 1,
                "url": null
            },
          ],
          "hasSub": 1,
          "id": 24,
          "name": "超图地图",
          "path": "/cmap",
          "showMenu": 1,
          "url": null
        },
      ],
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法，防止手动输入路由，而不是点击菜单项
    '$route': 'fetchData'
  },
  computed: {},
  created () {
    // 组件创建完后获取数据，
    this.fetchData()
    // 通过后端接口获取菜单组
    this.getMenu()
  },
  methods: {
    fetchData () {
      this.activePath = this.$route.path;
      this.menuArr.forEach((res, index) => {
        if(this.$route.path.indexOf(res.path) >= 0) {
          this.breadArr[0] = res.name;
        }
      })
      this.getNodeInfo(this.activePath, this.menuArr, (res) => {
        this.breadArr[1] = res.name;
      })
    },
    getMenu() {
      this.menuArr.forEach(item => {
        if(item.children == null || item.children.length == 0) {
          item.sonLength = 0;
        } else {
          item.sonLength = 1;
        }
      })
    },
    // 递归路由数据，返回当前路由对应的菜单数据
    getNodeInfo(routerPath, menuArr, callback) {
      menuArr.forEach((item, index) => {
        if(item.path === routerPath) {
          let obj = {
            name: item.name, 
            path: item.path
          }
          return callback(obj)
        }
        if(item.children && item.children != null && item.children.length != 0) {
          this.getNodeInfo(routerPath, item.children, callback);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
  .nav-header {
    z-index: 999;
    box-shadow: 2px 0px 4px rgb(97, 97, 97);
  }
  .main-box {
    min-height: 100%;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
