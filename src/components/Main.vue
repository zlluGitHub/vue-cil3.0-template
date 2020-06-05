<template>
  <div class="main">
    <Header :width="width"></Header>
    <div class="warp">
      <Sidebar :width="width"></Sidebar>
      <div class="content-right">
        <TagNav></TagNav>
        <div :style="style">
          <router-view></router-view>
        </div>
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
    // window.addEventListener("resize", () => {
    //   this.setSize();
    // });
  },
  mounted() {
    this.setSize();
  },
  methods: {
    setSize() {
      let offsetHeight = document.querySelector("header").offsetHeight;
      let tagsoffsetHeight = document.querySelector(".tags-nav").offsetHeight;
      if (offsetHeight) {
        this.style.height =
          size.PageH - offsetHeight - tagsoffsetHeight - 16 + "px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .warp {
    display: flex;
    .content-right {
      flex-grow: 1;
    }
  }
}
</style>