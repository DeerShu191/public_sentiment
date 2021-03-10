<template>
  <div id="app">
    <van-tabbar route v-model="active" @change="onChange()" v-show="show">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">突发</van-tabbar-item>
      <van-tabbar-item icon="browsing-history-o">分析</van-tabbar-item>
      <van-tabbar-item icon="hot-o">热点</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "App",
  components: {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem,
  },
  data() {
    return {
      active: 0,
      show: false,
    };
  },
  methods: {
    onChange() {
      const routerArray = ["/Home", "/Newspaper", "/Hot", "/Analysis"];
      this.$router.push(routerArray[this.active]);
      console.log(this.active, this.$route.path, this.show);
    },
  },
  created() {
    if (this.$route.path === "/") {
      this.$router.push("/Login");
    }
  },
  beforeUpdate: function () {
    this.show = true;
    console.log(this.active, this.$route.path, this.show);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
