<template>
  <div class="main">
    <Header :width="width"></Header>
    <div class="warp" :style="style">
      <Sidebar :width="width"></Sidebar>
      <div class="content-right">
        <TagNav></TagNav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import size from "../utils/winSize";
import Header from "./compon/Header";
import Sidebar from "./compon/Sidebar";
import TagNav from "./compon/TagNav";
export default {
  name: "footers",
  components: {
    // Footer,
    Sidebar,
    TagNav,
    Header
  },
  data() {
    return {
      style: {
        height: "auto"
      },
      width: "250px"
    };
  },
  created() {
    //监听窗口变化 自适应（ 根据需求自行添加 ）
    window.addEventListener("resize", () => {
      this.setSize();
    });
  },
  mounted() {
    this.setSize();
  },
  methods: {
    setSize() {
      let headerHeight = document.querySelector("header").offsetHeight;
      let bodyHeight = document.querySelector("body").offsetHeight;
      this.style.height = bodyHeight - headerHeight + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  .warp {
    display: flex;
    .content-right {
      flex-grow: 1;
    }
  }
}
</style>