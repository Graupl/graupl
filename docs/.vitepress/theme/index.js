import Layout from "./Layout.vue";
import DemoTable from "../../demo/DemoTable.vue";
import "./custom.scss";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("DemoTable", DemoTable);
  },
};
