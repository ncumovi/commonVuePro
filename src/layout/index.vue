<template>
  <div class="app-wrapper">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { Navbar } from "./components";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Navbar,
  },
  data() {
    return {
      projectInfoNotShow: null,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
