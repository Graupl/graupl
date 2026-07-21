import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default:
        "<div class='card-content'><div class='card-body'><p> Card</p></div></div>" +
        "<div class='card-footer'><a class='button-stretched' href='/'>The Action</a></div>",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("card");

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
