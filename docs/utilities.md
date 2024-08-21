## Utilities

---

### Alignment

**Variables**

Property Prefixes

- $align-content-class-prefix: "align-content-" !default;
- $align-items-class-prefix: "align-items-” !default;
- $align-self-class-prefix: "align-self-" !default;

Custom Variables to extend properties

- $custom-align-content-properties
- $custom-align-items-properties
- $custom-align-self-properties

Align Content

- align-content-normal
- align-content-start
- align-content-end
- align-content-center
- align-content-between
- align-content-around
- align-content-evenly
- align-content-baseline
- align-content-stretch

Align Items

- align-items-start
- align-items-end
- align-items-center
- align-items-baseline
- align-items-stretch

Align Self

- align-self-auto
- align-self-start
- align-self-end
- align-self-center
- align-self-baseline
- align-self-stretch

### Color

Variables

- $background-class-prefix: "bg-" !default;
- $text-class-prefix: "text-" !default;
- $custom-background-properties
- $custom-text-properties
- $custom-colors
- $custom-dark-map

Color Classes

- #{defaults.$background-class-prefix}-#{$color}-#{$shade};
- The class is a combination of the prefix, color, and shade.
- See table below for examples on how to use the background and text classes.

| Prefix | Color | Shade | Background Class | Text Class |
| --- | --- | --- | --- | --- |
| bg \| text \| primary \| secondary \| tertiary | 100 | bg-primary-100 | text-primary-100 |
| bg \| text \| primary \| secondary \| tertiary | 200 | bg-primary-200 | text-primary-200 |
| bg \| text \| primary \| secondary \| tertiary | 300 | bg-primary-300 | text-primary-300 |
| bg \| text \| primary \| secondary \| tertiary | 400 | bg-primary-400 | text-primary-400 |
| bg \| text \| primary \| secondary \| tertiary | 500 | bg-primary-500 | text-primary-500 |
| bg \| text \| primary \| secondary \| tertiary | 600 | bg-primary-600 | text-primary-600 |
| bg \| text \| primary \| secondary \| tertiary | 700 | bg-primary-700 | text-primary-700 |
| bg \| text \| primary \| secondary \| tertiary | 800 | bg-primary-800 | text-primary-800 |
| bg \| text \| primary \| secondary \| tertiary | 900 | bg-primary-900 | text-primary-900 |

Background and text properties

| Background Property | Text Property |
| --- | --- |
| bg-inherit | text-inherit |
| bg-current | text-current |
| bg-transparent | text-transparent |

### Display

- $display-class-prefix: "display-" !default;
- $custom-display-properties

| Display Property |
| --- |
| display-block |
| display-inline-block |
| display-inline |
| display-flex |
| display-inline-flex |
| display-grid |
| display-inline-grid |
| display-flow-root |
| display-none |
| display-contents |
| display-list-item |

### Flex

- $flex-direction-class-prefix: "flex-" !default;
- $flex-wrap-class-prefix: "flex-" !default;
- $flex-grow-class-prefix: "flex-" !default;
- $flex-shrink-class-prefix: "flex-" !default;

Custom variables to extend properties

- $custom-flex-direction-properties
- $custom-flex-wrap-properties
- $custom-flex-grow-properties
- $custom-flex-shrink-properties

| Prefix | Property | Class Name |
| --- | --- | --- |
| flex- | row | flex-row |
| flex- | row-reverse | flex-row-reverse |
| flex- | col | flex-col |
| flex- | col-reverse | flex-col-reverse |
| flex- | wrap | flex-wrap |
| flex- | wrap-reverse | flex-wrap-reverse |
| flex- | nowrap | flex-nowrap |
| flex- | grow | flex-grow |
| flex- | no-grow | flex-no-grow |
| flex- | shrink | flex-shrink |
| flex- | no-shrink | flex-no-shrink |

### Inset

- $custom-inset-properties
- $custom-inset-values

Every property is mapped to every value. So you can append the property name to any value.

| Property | Value | Class Name |
| --- | --- | --- |
| inset | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds | inset-auto |
| inset-x | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds \| inset-x-full |
| inset-y | 0 \| auto \| full \| quarter \| half \| three-quarters \| third | two-thirds \| inset-y-quarter |
| inset-start | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds | inset-start-half |
| inset-end | 0 \| auto \| full \| quarter \| half | three-quarters \| third \| two-thirds \| inset-end-three-quarters |
| top | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds | inset-top-third |
| right | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds | inset-right-two-thirds |
| bottom | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds | inset-bottom-0 |
| left | 0 \| auto \| full \| quarter \| half \| three-quarters \| third \| two-thirds \| inset-left-auto |

### Justification

- $justify-content-class-prefix: "justify-content-" !default;
- .$justify-items-class-prefix: "justify-items-" !default;
- $justify-self-class-prefix: "justify-self-" !default;
- $custom-justify-content-properties
- $custom-justify-items-properties
- $custom-justify-self-properties

Justify Content

| normal | justify-content-normal |
| --- | --- |
| start | justify-content-start |
| end | justify-content-end |
| center | justify-content-center |
| between | justify-content-between |
| around | justify-content-around |
| evenly | justify-content-evenly |
| stretch | justify-content-stretch |

Justify Items

| Property | Class Name |
| --- | --- |
| start | justify-items-start |
| end | justify-items-end |
| center | justify-items-center |
| stretch | justify-items-stretch |

Justify Self

| auto | justify-self-auto |
| --- | --- |
| start | justify-self-start |
| end | justify-self-end |
| center | justify-self-center |
| stretch | justify-self-stretch |

### List

- $list-style-type-class-prefix: "list-style-" !default;
- $list-style-postion-class-prefix: "list-style-" !default;
- $custom-list-style-type-properties
- $custom-list-style-postion-properties

List style type properties

| Property | Class Name |
| --- | --- |
| none | list-style-none |
| disc | list-style-disc |
| decimal | list-style-decimal |
| circle | list-style-circle |
| square | list-style-square |

List style position properties

| inside | list-style-inside |
| --- | --- |
| outside | list-style-outside |

### Order

- $order-class-prefix
- $custom-order-properties

| Property | Class Name |
| --- | --- |
| none | order-none |
| first | order-first |
| last | order-last |

### Position

- $position-class-prefix
- $custom-position-properties

| Property | Class Name |
| --- | --- |
| static | position-static |
| fixed | position-fixed |
| absolute | position-absolute |
| relative | position-relative |
| sticky | position-sticky |

### Ratio

Variables

`$ratio: var(*--#{root-defaults.$prefix}-ratio*);`

Contains element add this class to

- $ratio-selector: ".ratio" !default;

Item that covers the container uses this with the default prefix as “.”

- $ratio-variant-selector-prefix: "." !default;

Different rations you can use

| Property | Class Name |
| --- | --- |
| one-by-one | one-by-one |
| two-by-one | two-by-one |
| four-by-three | four-by-three |
| four-by-one | four-by-one |
| sixteen-by-nine | sixteen-by-nine |
| three-by-two | three-by-two |
| eight-by-five | eight-by-five |

### Spacing

| Abbreviation | Description | Values | Class Name |
| --- | --- | --- | --- |
| g | gap | 1 to 10 | g-1 |
| rg | row-gap | 1 to 10 | rg-2 |
| cg | column-gap | 1 to 10 | cg-3 |
| p | padding | 1 to 10 | p-4 |
| pt | padding-top | 1 to 10 | pt-5 |
| pr | padding-right | 1 to 10 | pr-6 |
| pb | padding-bottom | 1 to 10 | pb-7 |
| pl | padding-left | 1 to 10 | pl-8 |
| px | padding-left padding-right | 1 to 10 | px-9 |
| py | padding-top padding-bottom | 1 to 10 | py-10 |
| pbs | padding-block-start | 1 to 10 | pbs-1 |
| pbe | padding-block-end | 1 to 10 | pbe-2 |
| pbse | padding-block-start padding-block-end | 1 to 10 | pbse-3 |
| pis | padding-inline-start | 1 to 10 | pis-4 |
| pie | padding-inline-end | 1 to 10 | pie-5 |
| pise | padding-inline-start padding-inline-end | 1 to 10 | pise-6 |
| m | margin | 1 to 10 | m-7 |
| mt | margin-top | 1 to 10 | mt-8 |
| mr | margin-right | 1 to 10 | mr-9 |
| mb | margin-bottom | 1 to 10 | mb-10 |
| ml | margin-left | 1 to 10 | ml-1 |
| mx | margin-left margin-right | 1 to 10 | mx-2 |
| my | margin-top margin-bottom | 1 to 10 | my-3 |
| mbs | margin-block-start | 1 to 10 | mbs-4 |
| mbe | margin-block-end | 1 to 10 | mbe-5 |
| mbse | margin-block-start margin-block-end | 1 to 10 | mbse-6 |
| mis | margin-inline-start | 1 to 10 | mis-7 |
| mie | margin-inline-end | 1 to 10 | mie-8 |
| mise | margin-inline-start margin-inline-end | 1 to 10 | mise-9 |

### Typography

- $text-class-prefix: "text-" !default;

Text utilities

- text-paragraph
- text-small
- text-h1
- text-h2
- text-h3
- text-h4
- text-h5
- text-h6

Font Size Utilities

- $text-class-prefix: "text-" !default;

| Property | Class Name |
| --- | --- |
| xs | text-xs |
| sm | text-sm |
| base | text-base |
| lg | text-lg |
| xl | text-xl |
| 2xl | text-2xl |
| 3xl | text-3xl |
| 4xl | text-4xl |
| 5xl | text-5xl |

Font Weight Utilities

- $font-weight-class-prefix: "font-" !default;

| Property | Class Name |
| --- | --- |
| light | font-light |
| normal | font-normal|
| bold | font-bold |

Font Style Utilities

- $font-style-class-prefix: "font-" !default;

| Property | Class Name |
| --- | --- |
| normal | font-normal |
| italic | font-italic |

### Visibility

$visibility-class-prefix: "visibility-" !default;

| Property | Class Name |
| --- | --- |
| visible | visibility-visible |
| hidden | visibility-hidden |
| collapse | visibility-collapse |
