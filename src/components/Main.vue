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
      width: "230px"
    };
  },
  // created() {
  //   console.log(size);
  // },
  mounted() {
    let offsetHeight = document.querySelector("header").offsetHeight;
    let tagsoffsetHeight = document.querySelector(".tags-nav").offsetHeight;
    if (offsetHeight) {
      this.style.height = size.PageH - offsetHeight - tagsoffsetHeight + "px";
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