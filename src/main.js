import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/style/common.scss";

// elementUI按需引入组件
import {
  Button,
  Select,
  Radio,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from "element-ui";

const needsElement = [
  Button,
  Select,
  Radio,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
];

needsElement.forEach((item) => {
  Vue.component(item.name, item);
});

// 全局指令
import * as directives from "./directive";
//注册全局指令
Object.keys(directives.default).forEach((key) => {
  Vue.use(directives.default[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
