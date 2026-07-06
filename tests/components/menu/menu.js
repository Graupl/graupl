import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("menu");
    props.attributes["data-graupl-menu-type"] = "DisclosureMenu";

    return () =>
      h(BasicComponent, { ...props, tag: "ul" }, [
        h(
          BasicComponent,
          { ...props.attributes, class: "menu-item", tag: "li" },
          [
            h(
              "a",
              { "data-testid": "menu-item-1", href: "#", class: "menu-link" },
              "Menu Item 1"
            ),
          ]
        ),
        h(
          BasicComponent,
          { ...props.attributes, class: "menu-item", tag: "li" },
          [
            h(
              "a",
              { "data-testid": "menu-item-2", href: "#", class: "menu-link" },
              "Menu Item 2"
            ),
          ]
        ),
        h(
          BasicComponent,
          { ...props.attributes, class: "menu-item", tag: "li" },
          [
            h(
              "a",
              { "data-testid": "menu-item-3", href: "#", class: "menu-link" },
              "Menu Item 3"
            ),
          ]
        ),
      ]);
  },
};
