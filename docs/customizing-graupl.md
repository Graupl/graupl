<script setup>
  import LiveExample from "./vue-components/LiveExample.vue";

  const example = `<div class="display-flex flex-wrap g-5">
  <section aria-label="Expedition actions" style="--graupl-button-border-radius: 2rem; --graupl-button-border-width: 4px;">
    <button type="button" class="button">Join the expedition</button>
  </section>
  <button type="button" class="button">View the trail map</button>
</div>`;
</script>

# Customizing Graupl

Most of Graupl's styles, from colors and spacing to borders and displays, can be changed with CSS custom properties. When you set one that Graupl uses, its styles pick up your value and change accordingly.

Each reference page in this documentation site lists the available properties and their defaults.

## Change a button's border

The expedition button already has rounded corners and a thicker border. Edit the code to change `2rem` to `0` for square corners, or change `4px` to `1px` for a thinner border.

You can also move the custom styles to the surrounding `<div>` to see the change take place on both buttons.

<live-example :source-code="example" />

See the [Button custom properties](./base/button.md#custom-properties) for more options.

## Configure Sass

To change Sass defaults or control which styles Graupl generates, see [Compiling Graupl](./compiling-graupl.md).
