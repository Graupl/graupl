import "../../scss/theme/_index.scss";
import "../../scss/state/_index.scss";
import "../../scss/base/button/_index.scss";

export const createButton = ({
  variant = "default",
  state = "default",
  label,
}) => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = label;

  button.classList = [
    "button",
    variant === "default" ? null : variant,
    state === "default" ? null : state,
  ]
    .join(" ")
    .trim();

  if (state === "disabled") {
    button.setAttribute("disabled", "true");
  }

  return button;
};
