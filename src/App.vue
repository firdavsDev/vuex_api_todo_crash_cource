<template>
  <div class="container">
    <router-view />
    <BaseLoading />
  </div>
</template>
<script>
import BaseLoading from "./components/BaseLoading";
export default {
  name: "App",
  components: {
    BaseLoading,
  },
};
</script>
<style>
* {
  line-height: 1.6;
  background: #e8f7f0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
