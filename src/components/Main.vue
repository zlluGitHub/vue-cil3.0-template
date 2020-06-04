<template>
  <div class="main">
    <Header></Header>
    <div class="warp">
      <Sidebar></Sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Footer from "./compon/Footer";
import Header from "./compon/Header";
import Sidebar from "./compon/Sidebar";
export default {
  name: "footers",
  components: {
    // Footer,
    Sidebar,
    Header
  }
};
</script>

<style lang="scss" scoped>
.main {
  .warp {
    display: flex;
    .content {
      flex-grow: 1;
    }
  }
}
</style>