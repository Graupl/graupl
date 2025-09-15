import DefaultTheme from "vitepress/theme";
import DemoTable from "../../demo/DemoTable.vue";
import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("DemoTable", DemoTable);
  },
};
