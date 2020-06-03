<template>
  <div>
    <Header />
    <!-- <Sidebar /> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./compon/Footer";
import Header from "./compon/Header";
// import Sidebar from "./compon/Sidebar";
export default {
  name: "footers",
  components: {
    Footer,
    // Sidebar,
    Header
  }
};
</script>

