import "../../scss/theme/_index.scss";
import "../../scss/state/_index.scss";
import "../../scss/base/link/_index.scss";

export const createLink = ({ state = "default", label }) => {
  const link = document.createElement("a");
  link.innerText = label;

  link.classList = [state === "default" ? null : state].join(" ").trim();

  if (state === "disabled") {
    link.setAttribute("disabled", "true");
  }

  return link;
};
