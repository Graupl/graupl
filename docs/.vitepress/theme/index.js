import Layout from "./Layout.vue";
import DemoTable from "../../samples/Table.vue";
import "./custom.scss";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("SampleTable", DemoTable);
  },
};
