# Alignment

The alignment utilities provide a set of classes to adjust the `align-content`, `align-items`, and `align-self` properties of items.

## Align content

| Class Name | Property | Value |
| --- | --- | --- |
| [`.align-content-normal`](#align-content-normal) | align-content | normal |
| [`.align-content-start`](#align-content-start) | align-content | flex-start |
| [`.align-content-end`](#align-content-end) | align-content | flex-end |
| [`.align-content-center`](#align-content-center) | align-content | center |
| [`.align-content-between`](#align-content-between) | align-content | space-between |
| [`.align-content-around`](#align-content-around) | align-content | space-around |
| [`.align-content-evenly`](#align-content-evenly) | align-content | space-evenly |
| [`.align-content-baseline`](#align-content-baseline) | align-content | baseline |
| [`.align-content-stretch`](#align-content-stretch) | align-content | stretch |

### `.align-content-normal`

Sets the `align-content` property to `normal`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-normal p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-normal">
  <!-- Content here -->
</div>
```

### `.align-content-start`

Sets the `align-content` property to `flex-start`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-start p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-start">
  <!-- Content here -->
</div>
```

### `.align-content-end`

Sets the `align-content` property to `flex-end`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-end p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-end">
  <!-- Content here -->
</div>
```

### `.align-content-center`

Sets the `align-content` property to `center`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-center p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-center">
  <!-- Content here -->
</div>
```

### `.align-content-between`

Sets the `align-content` property to `space-between`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-between p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-between">
  <!-- Content here -->
</div>
```

### `.align-content-around`

Sets the `align-content` property to `space-around`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-around p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-around">
  <!-- Content here -->
</div>
```

### `.align-content-evenly`

Sets the `align-content` property to `space-evenly`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-evenly p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-evenly">
  <!-- Content here -->
</div>
```

### `.align-content-baseline`

Sets the `align-content` property to `baseline`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-baseline p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-baseline">
  <!-- Content here -->
</div>
```

### `.align-content-stretch`

Sets the `align-content` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-300 align-content-stretch p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-start">
  <!-- Content here -->
</div>
```

## Align items

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-items-start` | align-items | start |
| `.align-items-end` | align-items | end |
| `.align-items-center` | align-items | center |
| `.align-items-baseline` | align-items | baseline |
| `.align-items-stretch` | align-items | stretch |

### Align items start

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 align-items-start p-5 h-10">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

### Align items end

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 align-items-end p-5 h-10">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

### Align items center

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 align-items-center p-5 h-10">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

### Align items baseline

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 align-items-baseline p-5 h-10">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

### Align items stretch

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 align-items-stretch p-5 h-10">
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
  <div class="bg-primary-200 p-4">Item</div>
</div>

## Align self

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-self-auto` | align-self | auto |
| `.align-self-start` | align-self | start |
| `.align-self-end` | align-self | end |
| `.align-self-center` | align-self | center |
| `.align-self-baseline` | align-self | baseline |
| `.align-self-stretch` | align-self | stretch |

### Align self auto

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-auto">Item</div>
</div>

### Align self start

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-start">Item</div>
</div>

### Align self end

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-end">Item</div>
</div>

### Align self end

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-end">Item</div>
</div>

### Align self center

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-center">Item</div>
</div>

### Align self baseline

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-baseline">Item</div>
</div>

### Align self stretch

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-300 p-5 h-10">
  <div class="bg-primary-200 p-4 align-self-stretch">Item</div>
</div>

// @graupl/graupl alignment utilities styles.
//
// This file generates the alignment utility classes provided by Graupl.
//
// The following classes are generated by default:
// - `.align-content-normal`: Sets the align-content property to `normal`.
// - `.align-content-start`: Sets the align-content property to `flex-start`.
// - `.align-content-end`: Sets the align-content property to `flex-end`.
// - `.align-content-center`: Sets the align-content property to `center`.
// - `.align-content-between`: Sets the align-content property to `space-between`.
// - `.align-content-around`: Sets the align-content property to `space-around`.
// - `.align-content-evenly`: Sets the align-content property to `space-evenly`.
// - `.align-content-baseline`: Sets the align-content property to `baseline`.
// - `.align-content-stretch`: Sets the align-content property to `stretch`.
// - `.align-items-start`: Sets the align-items property to `start`.
// - `.align-items-end`: Sets the align-items property to `end`.
// - `.align-items-center`: Sets the align-items property to `center`.
// - `.align-items-baseline`: Sets the align-items property to `baseline`.
// - `.align-items-stretch`: Sets the align-items property to `stretch`.
// - `.align-self-auto`: Sets the align-self property to `auto`.
// - `.align-self-start`: Sets the align-self property to `start`.
// - `.align-self-end`: Sets the align-self property to `end`.
// - `.align-self-center`: Sets the align-self property to `center`.
// - `.align-self-baseline`: Sets the align-self property to `baseline`.
// - `.align-self-stretch`: Sets the align-self property to `stretch`.
//
// The following custom properties control the generated classes:
// - N/A.
//
// The following variables control the generated classes:
// - `$selector-base`: The base selector for the utility classes.
// - `$use-important`: A flag to determine if the `!important` flag should be added to the utility classes.
// - `$screen-aware`: A flag to generate screen-aware utility classes.
// - `$theme-aware`: A flag to generate theme-aware utility classes.
// - `$state-aware`: A flag to generate state-aware utility classes.
// - `$screen-aware-separator`: The separator for screen-aware utility classes.
// - `$theme-aware-separator`: The separator for theme-aware utility classes.
// - `$state-aware-separator`: The separator for state-aware utility classes.
// - `$align-content-selector-prefix`: The prefix for the align content utility classes.
// - `$base-align-content-properties`: The base properties and values for the align content utility classes.
// - `$custom-align-content-properties`: The custom properties and values for the align content utility classes.
// - `$align-content-properties`: The combined properties and values for the align content utility classes.
// - `$align-items-selector-prefix`: The prefix for the align items utility classes.
// - `$base-align-items-properties`: The base properties and values for the align items utility classes.
// - `$custom-align-items-properties`: The custom properties and values for the align items utility classes.
// - `$align-items-properties`: The combined properties and values for the align items utility classes.
// - `$align-self-selector-prefix`: The prefix for the align self utility classes.
// - `$base-align-self-properties`: The base properties and values for the align self utility classes.
// - `$custom-align-self-properties`: The custom properties and values for the align self utility classes.
// - `$align-self-properties`: The combined properties and values for the align self utility classes.
//
// Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, or `$state-aware` to `true`.
// By default, no responsive utility classes are generated.
//
// When set to true, screen-aware utility classes will be generated for each screen size in the following pattern:
// - `.{screen-name}:{prefix}{value}`
//
// e.g. `.sm:align-content-normal` will align the content by its normal value on screens equal to or larger than the `sm` breakpoint.
//
// When set to true, theme-aware utility classes will be generated for each theme in the following pattern:
// - `.{theme-name}:{prefix}{value}`
//
// e.g. `.dark:align-content-normal` will align the content by its normal value when the `dark` theme is active.
//
// When set to true, state-aware utility classes will be generated for each state in the following pattern:
// - `.{state-name}:{prefix}{value}`
//
// e.g. `.hover:align-content-normal` will align the content by its normal value when the element is hovered.
//
// @example
//   <div class="display-grid align-content-normal">This content is aligned normally.</div>

@use "../../defaults" as root-defaults;
@use "../../mixins/layer" as *;
@use "../../mixins/utility";
@use "../../theme/color/variables" as color;
@use "defaults";
@use "sass:map";
@use "variables" as*;

@include layer(utilities) {
  // `.`
  $selector-prefix: defaults.$selector-base;

  // For each align content property, create a utility class.
  @each $name, $value in defaults.$align-content-properties {
    // e.g. `.align-content-normal` or `.align-content-start`
    $selector: #{$selector-prefix}#{defaults.$align-content-selector-prefix}#{$name};

    @include utility.create(
      $selector,
      align-content,
      $value,
      $important: #{defaults.$use-important}
    );
  }

  // For each align items property, create a utility class.
  @each $name, $value in defaults.$align-items-properties {
    // e.g. `.align-items-start` or `.align-items-center`
    $selector: #{$selector-prefix}#{defaults.$align-items-selector-prefix}#{$name};

    @include utility.create(
      $selector,
      align-items,
      $value,
      $important: #{defaults.$use-important}
    );
  }

  // For each align self property, create a utility class.
  @each $name, $value in defaults.$align-self-properties {
    // e.g. `.align-self-auto` or `.align-self-center`
    $selector: #{$selector-prefix}#{defaults.$align-self-selector-prefix}#{$name};

    @include utility.create(
      $selector,
      align-self,
      $value,
      $important: #{defaults.$use-important}
    );
  }

  // Generate screen-aware utilities.
  @if defaults.$screen-aware and root-defaults.$screen-aware-utilities {
    @each $screen-name in map.keys(root-defaults.$screen-sizes) {
      // e.g. `.md:` or `.lg:`
      $selector-prefix: #{defaults.$selector-base}#{$screen-name}#{defaults.$screen-aware-separator};

      // For each align content property, create a utility class.
      @each $name, $value in defaults.$align-content-properties {
        // e.g. `.md:align-content-normal` or `.lg:align-content-start`
        $selector: #{$selector-prefix}#{defaults.$align-content-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-content,
          $value,
          $important: #{defaults.$use-important},
          $screen: $screen-name
        );
      }

      // For each align items property, create a utility class.
      @each $name, $value in defaults.$align-items-properties {
        // e.g. `.md:align-items-start` or `.lg:align-items-center`
        $selector: #{$selector-prefix}#{defaults.$align-items-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-items,
          $value,
          $important: #{defaults.$use-important},
          $screen: $screen-name
        );
      }

      // For each align self property, create a utility class.
      @each $name, $value in defaults.$align-self-properties {
        // e.g. `.md:align-self-auto` or `.lg:align-self-center`
        $selector: #{$selector-prefix}#{defaults.$align-self-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-self,
          $value,
          $important: #{defaults.$use-important},
          $screen: $screen-name
        );
      }
    }
  }

  // Generate theme-aware utilities.
  @if defaults.$theme-aware and root-defaults.$theme-aware-utilities {
    @each $theme-name, $colors in color.$themes {
      @if $theme-name != active {
        // e.g. `.dark:` or `.light:`
        $selector-prefix: #{defaults.$selector-base}#{$theme-name}#{defaults.$theme-aware-separator};

        // For each align content property, create a utility class.
        @each $name, $value in defaults.$align-content-properties {
          // e.g. `.dark:align-content-normal` or `.light:align-content-start`
          $selector: #{$selector-prefix}#{defaults.$align-content-selector-prefix}#{$name};

          @include utility.create(
            $selector,
            align-content,
            $value,
            $important: #{defaults.$use-important},
            $theme: $theme-name
          );
        }

        // For each align items property, create a utility class.
        @each $name, $value in defaults.$align-items-properties {
          // e.g. `.dark:align-items-start` or `.light:align-items-center`
          $selector: #{$selector-prefix}#{defaults.$align-items-selector-prefix}#{$name};

          @include utility.create(
            $selector,
            align-items,
            $value,
            $important: #{defaults.$use-important},
            $theme: $theme-name
          );
        }

        // For each align self property, create a utility class.
        @each $name, $value in defaults.$align-self-properties {
          // e.g. `.dark:align-self-auto` or `.light:align-self-center`
          $selector: #{$selector-prefix}#{defaults.$align-self-selector-prefix}#{$name};

          @include utility.create(
            $selector,
            align-self,
            $value,
            $important: #{defaults.$use-important},
            $theme: $theme-name
          );
        }
      }
    }
  }

  // Generate state-aware utilities.
  @if defaults.$state-aware and root-defaults.$state-aware-utilities {
    @each $state-name, $value in root-defaults.$state-selectors {
      // e.g. `.hover:` or `.focus:`
      $selector-prefix: #{defaults.$selector-base}#{$state-name}#{defaults.$state-aware-separator};

      // For each align content property, create a utility class.
      @each $name, $value in defaults.$align-content-properties {
        // e.g. `.hover:align-content-normal` or `.focus:align-content-start`
        $selector: #{$selector-prefix}#{defaults.$align-content-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-content,
          $value,
          $important: #{defaults.$use-important},
          $state: $state-name
        );
      }

      // For each align items property, create a utility class.
      @each $name, $value in defaults.$align-items-properties {
        // e.g. `.hover:align-items-start` or `.focus:align-items-center`
        $selector: #{$selector-prefix}#{defaults.$align-items-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-items,
          $value,
          $important: #{defaults.$use-important},
          $state: $state-name
        );
      }

      // For each align self property, create a utility class.
      @each $name, $value in defaults.$align-self-properties {
        // e.g. `.hover:align-self-auto` or `.focus:align-self-center`
        $selector: #{$selector-prefix}#{defaults.$align-self-selector-prefix}#{$name};

        @include utility.create(
          $selector,
          align-self,
          $value,
          $important: #{defaults.$use-important},
          $state: $state-name
        );
      }
    }
  }
}
