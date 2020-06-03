<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./compon/Footer";
import Header from "./compon/Header";
export default {
  name: "footers",
  components: {
    Footer,
    Header
  }
};
</script>

