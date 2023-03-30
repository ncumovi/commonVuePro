<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary" @click="editStore">修改store</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
import { getList } from "@/api/demo";
export default {
  components: {
    HelloWorld,
  },
  computed: {
    name() {
      return this.$store.state.app.name;
    },
  },
  created() {
    this.getNewsList();
  },
  methods: {
    editStore() {
      this.$store.dispatch("app/setName", "movi");
    },
    getNewsList() {
      getList().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>