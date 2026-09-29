<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const count = ref("columns");
  const fixed = ref("fixed");
  const xsCount = ref("xs:count-1");
  const smCount = ref("sm:count-1");
  const mdCount = ref("md:count-1");
  const lgCount = ref("lg:count-1");
  const xlCount = ref("xl:count-1");
  const span = ref("span-1");
  const xsSpan = ref("xs:span-1");
  const smSpan = ref("sm:span-1");
  const mdSpan = ref("md:span-1");
  const lgSpan = ref("lg:span-1");
  const xlSpan = ref("xl:span-1");

  const twelveColumns = `
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
    `;

  const exampleColumns = computed(() => {

    const classes = [
      "columns",
      count.value !== "columns" ? count.value : null,
    ].filter(c => c !== null).join(' ');

    return `
<div class="${classes}">${twelveColumns}</div>
    `
  });

  const exampleColumnsFixed = computed(() => {

    const classes = [
      fixed.value !== "default" ? fixed.value : null,
    ].filter(c => c !== null).join(' ');

    return `
<div class="columns count-8 ${classes}">${twelveColumns}</div>
    `
  });

  const exampleColumnsSizeCount = computed(() => {

    const xsClasses = [
      xsCount.value !== "default" ? xsCount.value : null,
    ].filter(c => c !== null);

    const smClasses = [
      smCount.value !== "default" ? smCount.value : null,
    ].filter(c => c !== null);

    const mdClasses = [
      mdCount.value !== "default" ? mdCount.value : null,
    ].filter(c => c !== null);

    const lgClasses = [
      lgCount.value !== "default" ? lgCount.value : null,
    ].filter(c => c !== null);

    const xlClasses = [
      xlCount.value !== "default" ? xlCount.value : null,
    ].filter(c => c !== null);

    return `
<div class="columns ${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses}">${twelveColumns}</div>
    `
  });

  const exampleColumnsSpan = computed(() => {

    const classes = [
      span.value !== "default" ? span.value : null,
    ].filter(c => c !== null);

    return `
<div class="columns count-8 ${classes}">${twelveColumns}</div>
    `
  });

  const exampleColumnsSizeSpan = computed(() => {

    const xsClasses = [
      xsSpan.value !== "default" ? xsSpan.value : null,
    ].filter(c => c !== null);

    const smClasses = [
      smSpan.value !== "default" ? smSpan.value : null,
    ].filter(c => c !== null);

    const mdClasses = [
      mdSpan.value !== "default" ? mdSpan.value : null,
    ].filter(c => c !== null);

    const lgClasses = [
      lgSpan.value !== "default" ? lgSpan.value : null,
    ].filter(c => c !== null);

    const xlClasses = [
      xlSpan.value !== "default" ? xlSpan.value : null,
    ].filter(c => c !== null);

    return `
<div class="columns ${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses}">${twelveColumns}</div>
    `
  });
</script>

# Columns
The columns component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.columns` | The main columns component. |
| `.count-1` | Sets the number of columns in the columns component to 1. |
| `.count-2` | Sets the number of columns in the columns component to 2. |
| `.count-3` | Sets the number of columns in the columns component to 3. |
| `.count-4` | Sets the number of columns in the columns component to 4. |
| `.count-5` | Sets the number of columns in the columns component to 5. |
| `.count-6` | Sets the number of columns in the columns component to 6. |
| `.count-7` | Sets the number of columns in the columns component to 7. |
| `.count-8` | Sets the number of columns in the columns component to 8. |
| `.count-9` | Sets the number of columns in the columns component to 9. |
| `.count-10` | Sets the number of columns in the columns component to 10. |
| `.count-11` | Sets the number of columns in the columns component to 11. |
| `.count-12` | Sets the number of columns in the columns component to 12. |

<live-example :source-code="exampleColumns" :key="count">
  <template #options>
    <div class="input-group">
      <select id="select-columns-count" v-model="count">
        <option value="columns">Columns</option>
        <option value="count-1">Count 1</option>
        <option value="count-2">Count 2</option>
        <option value="count-3">Count 3</option>
        <option value="count-4">Count 4</option>
        <option value="count-5">Count 5</option>
        <option value="count-6">Count 6</option>
        <option value="count-7">Count 7</option>
        <option value="count-8">Count 8</option>
        <option value="count-9">Count 9</option>
        <option value="count-10">Count 10</option>
        <option value="count-11">Count 11</option>
        <option value="count-12">Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .fixed properties

| Property Name | Description |
| --- | --- |
| `.fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns. |
| `.xs:fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns on extra small screens. |
| `.sm:fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns on small screens. |
| `.md:fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns on medium screens. |
| `.lg:fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns on large screens. |
| `.xl:fixed` | Sets the min/max columns widths to be equal, forcing a fixed number of columns on extra large screens. |

<live-example :source-code="exampleColumnsFixed" :key="fixed">
  <template #options>
    <div class="input-group">
      <select id="select-columns-fixed" v-model="fixed">
        <option value="fixed">Fixed</option>
        <option value="xs:fixed">Extra Small Fixed</option>
        <option value="sm:fixed">Small Fixed</option>
        <option value="md:fixed">Medium Fixed</option>
        <option value="lg:fixed">Large Fixed</option>
        <option value="xl:fixed">Extra Large Fixed</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .[size]:count properties

| Property Name | Description |
| --- | --- |
| `.xs:count-1` | Sets the number of columns in the columns component to 1 on extra small screens. |
| `.xs:count-2` | Sets the number of columns in the columns component to 2 on extra small screens. |
| `.xs:count-3` | Sets the number of columns in the columns component to 3 on extra small screens. |
| `.xs:count-4` | Sets the number of columns in the columns component to 4 on extra small screens. |
| `.xs:count-5` | Sets the number of columns in the columns component to 5 on extra small screens. |
| `.xs:count-6` | Sets the number of columns in the columns component to 6 on extra small screens. |
| `.xs:count-7` | Sets the number of columns in the columns component to 7 on extra small screens. |
| `.xs:count-8` | Sets the number of columns in the columns component to 8 on extra small screens. |
| `.xs:count-9` | Sets the number of columns in the columns component to 9 on extra small screens. |
| `.xs:count-10` | Sets the number of columns in the columns component to 10 on extra small screens. |
| `.xs:count-11` | Sets the number of columns in the columns component to 11 on extra small screens. |
| `.xs:count-12` | Sets the number of columns in the columns component to 12 on extra small screens. |
| `.sm:count-1` | Sets the number of columns in the columns component to 1 on small screens. |
| `.sm:count-2` | Sets the number of columns in the columns component to 2 on small screens. |
| `.sm:count-3` | Sets the number of columns in the columns component to 3 on small screens. |
| `.sm:count-4` | Sets the number of columns in the columns component to 4 on small screens. |
| `.sm:count-5` | Sets the number of columns in the columns component to 5 on small screens. |
| `.sm:count-6` | Sets the number of columns in the columns component to 6 on small screens. |
| `.sm:count-7` | Sets the number of columns in the columns component to 7 on small screens. |
| `.sm:count-8` | Sets the number of columns in the columns component to 8 on small screens. |
| `.sm:count-9` | Sets the number of columns in the columns component to 9 on small screens. |
| `.sm:count-10` | Sets the number of columns in the columns component to 10 on small screens. |
| `.sm:count-11` | Sets the number of columns in the columns component to 11 on small screens. |
| `.sm:count-12` | Sets the number of columns in the columns component to 12 on small screens. |
| `.md:count-1` | Sets the number of columns in the columns component to 1 on medium screens. |
| `.md:count-2` | Sets the number of columns in the columns component to 2 on medium screens. |
| `.md:count-3` | Sets the number of columns in the columns component to 3 on medium screens. |
| `.md:count-4` | Sets the number of columns in the columns component to 4 on medium screens. |
| `.md:count-5` | Sets the number of columns in the columns component to 5 on medium screens. |
| `.md:count-6` | Sets the number of columns in the columns component to 6 on medium screens. |
| `.md:count-7` | Sets the number of columns in the columns component to 7 on medium screens. |
| `.md:count-8` | Sets the number of columns in the columns component to 8 on medium screens. |
| `.md:count-9` | Sets the number of columns in the columns component to 9 on medium screens. |
| `.md:count-10` | Sets the number of columns in the columns component to 10 on medium screens. |
| `.md:count-11` | Sets the number of columns in the columns component to 11 on medium screens. |
| `.md:count-12` | Sets the number of columns in the columns component to 12 on medium screens. |
| `.lg:count-1` | Sets the number of columns in the columns component to 1 on large screens. |
| `.lg:count-2` | Sets the number of columns in the columns component to 2 on large screens. |
| `.lg:count-3` | Sets the number of columns in the columns component to 3 on large screens. |
| `.lg:count-4` | Sets the number of columns in the columns component to 4 on large screens. |
| `.lg:count-5` | Sets the number of columns in the columns component to 5 on large screens. |
| `.lg:count-6` | Sets the number of columns in the columns component to 6 on large screens. |
| `.lg:count-7` | Sets the number of columns in the columns component to 7 on large screens. |
| `.lg:count-8` | Sets the number of columns in the columns component to 8 on large screens. |
| `.lg:count-9` | Sets the number of columns in the columns component to 9 on large screens. |
| `.lg:count-10` | Sets the number of columns in the columns component to 10 on large screens. |
| `.lg:count-11` | Sets the number of columns in the columns component to 11 on large screens. |
| `.lg:count-12` | Sets the number of columns in the columns component to 12 on large screens. |
| `.xl:count-1` | Sets the number of columns in the columns component to 1 on extra large screens. |
| `.xl:count-2` | Sets the number of columns in the columns component to 2 on extra large screens. |
| `.xl:count-3` | Sets the number of columns in the columns component to 3 on extra large screens. |
| `.xl:count-4` | Sets the number of columns in the columns component to 4 on extra large screens. |
| `.xl:count-5` | Sets the number of columns in the columns component to 5 on extra large screens. |
| `.xl:count-6` | Sets the number of columns in the columns component to 6 on extra large screens. |
| `.xl:count-7` | Sets the number of columns in the columns component to 7 on extra large screens. |
| `.xl:count-8` | Sets the number of columns in the columns component to 8 on extra large screens. |
| `.xl:count-9` | Sets the number of columns in the columns component to 9 on extra large screens. |
| `.xl:count-10` | Sets the number of columns in the columns component to 10 on extra large screens. |
| `.xl:count-11` | Sets the number of columns in the columns component to 11 on extra large screens. |
| `.xl:count-12` | Sets the number of columns in the columns component to 12 on extra large screens. |

<live-example :source-code="exampleColumnsSizeCount" :key="`xsCount-smCount-mdCount-lgCount-xlCount`">
  <template #options>
    <div class="input-group">
      <select id="select-columns-xs-count" v-model="xsCount">
        <option value="xs:count-1">Extra Small Count 1</option>
        <option value="xs:count-2">Extra Small Count 2</option>
        <option value="xs:count-3">Extra Small Count 3</option>
        <option value="xs:count-4">Extra Small Count 4</option>
        <option value="xs:count-5">Extra Small Count 5</option>
        <option value="xs:count-6">Extra Small Count 6</option>
        <option value="xs:count-7">Extra Small Count 7</option>
        <option value="xs:count-8">Extra Small Count 8</option>
        <option value="xs:count-9">Extra Small Count 9</option>
        <option value="xs:count-10">Extra Small Count 10</option>
        <option value="xs:count-11">Extra Small Count 11</option>
        <option value="xs:count-12">Extra Small Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-sm-count" v-model="smCount">
        <option value="sm:count-1">Small Count 1</option>
        <option value="sm:count-2">Small Count 2</option>
        <option value="sm:count-3">Small Count 3</option>
        <option value="sm:count-4">Small Count 4</option>
        <option value="sm:count-5">Small Count 5</option>
        <option value="sm:count-6">Small Count 6</option>
        <option value="sm:count-7">Small Count 7</option>
        <option value="sm:count-8">Small Count 8</option>
        <option value="sm:count-9">Small Count 9</option>
        <option value="sm:count-10">Small Count 10</option>
        <option value="sm:count-11">Small Count 11</option>
        <option value="sm:count-12">Small Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-md-count" v-model="mdCount">
        <option value="md:count-1">Medium Count 1</option>
        <option value="md:count-2">Medium Count 2</option>
        <option value="md:count-3">Medium Count 3</option>
        <option value="md:count-4">Medium Count 4</option>
        <option value="md:count-5">Medium Count 5</option>
        <option value="md:count-6">Medium Count 6</option>
        <option value="md:count-7">Medium Count 7</option>
        <option value="md:count-8">Medium Count 8</option>
        <option value="md:count-9">Medium Count 9</option>
        <option value="md:count-10">Medium Count 10</option>
        <option value="md:count-11">Medium Count 11</option>
        <option value="md:count-12">Medium Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-lg-count" v-model="lgCount">
        <option value="lg:count-1">Large Count 1</option>
        <option value="lg:count-2">Large Count 2</option>
        <option value="lg:count-3">Large Count 3</option>
        <option value="lg:count-4">Large Count 4</option>
        <option value="lg:count-5">Large Count 5</option>
        <option value="lg:count-6">Large Count 6</option>
        <option value="lg:count-7">Large Count 7</option>
        <option value="lg:count-8">Large Count 8</option>
        <option value="lg:count-9">Large Count 9</option>
        <option value="lg:count-10">Large Count 10</option>
        <option value="lg:count-11">Large Count 11</option>
        <option value="lg:count-12">Large Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-xl-count" v-model="xlCount">
        <option value="xl:count-1">Extra Large Count 1</option>
        <option value="xl:count-2">Extra Large Count 2</option>
        <option value="xl:count-3">Extra Large Count 3</option>
        <option value="xl:count-4">Extra Large Count 4</option>
        <option value="xl:count-5">Extra Large Count 5</option>
        <option value="xl:count-6">Extra Large Count 6</option>
        <option value="xl:count-7">Extra Large Count 7</option>
        <option value="xl:count-8">Extra Large Count 8</option>
        <option value="xl:count-9">Extra Large Count 9</option>
        <option value="xl:count-10">Extra Large Count 10</option>
        <option value="xl:count-11">Extra Large Count 11</option>
        <option value="xl:count-12">Extra Large Count 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

### .span properties

| Property Name | Description |
| --- | --- |
| `.span-1` | Sets the span of a column in the columns component to 1. |
| `.span-2` | Sets the span of a column in the columns component to 2. |
| `.span-3` | Sets the span of a column in the columns component to 3. |
| `.span-4` | Sets the span of a column in the columns component to 4. |
| `.span-5` | Sets the span of a column in the columns component to 5. |
| `.span-6` | Sets the span of a column in the columns component to 6. |
| `.span-7` | Sets the span of a column in the columns component to 7. |
| `.span-8` | Sets the span of a column in the columns component to 8. |
| `.span-9` | Sets the span of a column in the columns component to 9. |
| `.span-10` | Sets the span of a column in the columns component to 10. |
| `.span-11` | Sets the span of a column in the columns component to 11. |
| `.span-12` | Sets the span of a column in the columns component to 12. |

<live-example :source-code="exampleColumnsSpan" :key="span">
  <template #options>
    <div class="input-group">
      <select id="select-columns-span" v-model="span">
        <option value="span-1">Span 1</option>
        <option value="span-2">Span 2</option>
        <option value="span-3">Span 3</option>
        <option value="span-4">Span 4</option>
        <option value="span-5">Span 5</option>
        <option value="span-6">Span 6</option>
        <option value="span-7">Span 7</option>
        <option value="span-8">Span 8</option>
        <option value="span-9">Span 9</option>
        <option value="span-10">Span 10</option>
        <option value="span-11">Span 11</option>
        <option value="span-12">Span 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .[size]:count properties

| Property Name | Description |
| --- | --- |
| `.xs:span-1` | Sets the span of a column in the columns component to 1 on extra small screens. |
| `.xs:span-2` | Sets the span of a column in the columns component to 2 on extra small screens. |
| `.xs:span-3` | Sets the span of a column in the columns component to 3 on extra small screens. |
| `.xs:span-4` | Sets the span of a column in the columns component to 4 on extra small screens. |
| `.xs:span-5` | Sets the span of a column in the columns component to 5 on extra small screens. |
| `.xs:span-6` | Sets the span of a column in the columns component to 6 on extra small screens. |
| `.xs:span-7` | Sets the span of a column in the columns component to 7 on extra small screens. |
| `.xs:span-8` | Sets the span of a column in the columns component to 8 on extra small screens. |
| `.xs:span-9` | Sets the span of a column in the columns component to 9 on extra small screens. |
| `.xs:span-10` | Sets the span of a column in the columns component to 10 on extra small screens. |
| `.xs:span-11` | Sets the span of a column in the columns component to 11 on extra small screens. |
| `.xs:span-12` | Sets the span of a column in the columns component to 12 on extra small screens. |
| `.sm:span-1` | Sets the span of a column in the columns component to 1 on small screens. |
| `.sm:span-2` | Sets the span of a column in the columns component to 2 on small screens. |
| `.sm:span-3` | Sets the span of a column in the columns component to 3 on small screens. |
| `.sm:span-4` | Sets the span of a column in the columns component to 4 on small screens. |
| `.sm:span-5` | Sets the span of a column in the columns component to 5 on small screens. |
| `.sm:span-6` | Sets the span of a column in the columns component to 6 on small screens. |
| `.sm:span-7` | Sets the span of a column in the columns component to 7 on small screens. |
| `.sm:span-8` | Sets the span of a column in the columns component to 8 on small screens. |
| `.sm:span-9` | Sets the span of a column in the columns component to 9 on small screens. |
| `.sm:span-10` | Sets the span of a column in the columns component to 10 on small screens. |
| `.sm:span-11` | Sets the span of a column in the columns component to 11 on small screens. |
| `.sm:span-12` | Sets the span of a column in the columns component to 12 on small screens. |
| `.md:span-1` | Sets the span of a column in the columns component to 1 on medium screens. |
| `.md:span-2` | Sets the span of a column in the columns component to 2 on medium screens. |
| `.md:span-3` | Sets the span of a column in the columns component to 3 on medium screens. |
| `.md:span-4` | Sets the span of a column in the columns component to 4 on medium screens. |
| `.md:span-5` | Sets the span of a column in the columns component to 5 on medium screens. |
| `.md:span-6` | Sets the span of a column in the columns component to 6 on medium screens. |
| `.md:span-7` | Sets the span of a column in the columns component to 7 on medium screens. |
| `.md:span-8` | Sets the span of a column in the columns component to 8 on medium screens. |
| `.md:span-9` | Sets the span of a column in the columns component to 9 on medium screens. |
| `.md:span-10` | Sets the span of a column in the columns component to 10 on medium screens. |
| `.md:span-11` | Sets the span of a column in the columns component to 11 on medium screens. |
| `.md:span-12` | Sets the span of a column in the columns component to 12 on medium screens. |
| `.lg:span-1` | Sets the span of a column in the columns component to 1 on large screens. |
| `.lg:span-2` | Sets the span of a column in the columns component to 2 on large screens. |
| `.lg:span-3` | Sets the span of a column in the columns component to 3 on large screens. |
| `.lg:span-4` | Sets the span of a column in the columns component to 4 on large screens. |
| `.lg:span-5` | Sets the span of a column in the columns component to 5 on large screens. |
| `.lg:span-6` | Sets the span of a column in the columns component to 6 on large screens. |
| `.lg:span-7` | Sets the span of a column in the columns component to 7 on large screens. |
| `.lg:span-8` | Sets the span of a column in the columns component to 8 on large screens. |
| `.lg:span-9` | Sets the span of a column in the columns component to 9 on large screens. |
| `.lg:span-10` | Sets the span of a column in the columns component to 10 on large screens. |
| `.lg:span-11` | Sets the span of a column in the columns component to 11 on large screens. |
| `.lg:span-12` | Sets the span of a column in the columns component to 12 on large screens. |
| `.xl:span-1` | Sets the span of a column in the columns component to 1 on extra large screens. |
| `.xl:span-2` | Sets the span of a column in the columns component to 2 on extra large screens. |
| `.xl:span-3` | Sets the span of a column in the columns component to 3 on extra large screens. |
| `.xl:span-4` | Sets the span of a column in the columns component to 4 on extra large screens. |
| `.xl:span-5` | Sets the span of a column in the columns component to 5 on extra large screens. |
| `.xl:span-6` | Sets the span of a column in the columns component to 6 on extra large screens. |
| `.xl:span-7` | Sets the span of a column in the columns component to 7 on extra large screens. |
| `.xl:span-8` | Sets the span of a column in the columns component to 8 on extra large screens. |
| `.xl:span-9` | Sets the span of a column in the columns component to 9 on extra large screens. |
| `.xl:span-10` | Sets the span of a column in the columns component to 10 on extra large screens. |
| `.xl:span-11` | Sets the span of a column in the columns component to 11 on extra large screens. |
| `.xl:span-12` | Sets the span of a column in the columns component to 12 on extra large screens. |

<live-example :source-code="exampleColumnsSizeSpan" :key="`xsSpan-smSpan-mdSpan-lgSpan-xlSpan`">
  <template #options>
    <div class="input-group">
      <select id="select-columns-xs-span" v-model="xsSpan">
        <option value="xs:span-1">Extra Small Span 1</option>
        <option value="xs:span-2">Extra Small Span 2</option>
        <option value="xs:span-3">Extra Small Span 3</option>
        <option value="xs:span-4">Extra Small Span 4</option>
        <option value="xs:span-5">Extra Small Span 5</option>
        <option value="xs:span-6">Extra Small Span 6</option>
        <option value="xs:span-7">Extra Small Span 7</option>
        <option value="xs:span-8">Extra Small Span 8</option>
        <option value="xs:span-9">Extra Small Span 9</option>
        <option value="xs:span-10">Extra Small Span 10</option>
        <option value="xs:span-11">Extra Small Span 11</option>
        <option value="xs:span-12">Extra Small Span 12</option>
      </select>
      <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-sm-span" v-model="smSpan">
        <option value="sm:span-1">Small Span 1</option>
        <option value="sm:span-2">Small Span 2</option>
        <option value="sm:span-3">Small Span 3</option>
        <option value="sm:span-4">Small Span 4</option>
        <option value="sm:span-5">Small Span 5</option>
        <option value="sm:span-6">Small Span 6</option>
        <option value="sm:span-7">Small Span 7</option>
        <option value="sm:span-8">Small Span 8</option>
        <option value="sm:span-9">Small Span 9</option>
        <option value="sm:span-10">Small Span 10</option>
        <option value="sm:span-11">Small Span 11</option>
        <option value="sm:span-12">Small Span 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-md-Span" v-model="mdSpan">
        <option value="md:span-1">Medium Span 1</option>
        <option value="md:span-2">Medium Span 2</option>
        <option value="md:span-3">Medium Span 3</option>
        <option value="md:span-4">Medium Span 4</option>
        <option value="md:span-5">Medium Span 5</option>
        <option value="md:span-6">Medium Span 6</option>
        <option value="md:span-7">Medium Span 7</option>
        <option value="md:span-8">Medium Span 8</option>
        <option value="md:span-9">Medium Span 9</option>
        <option value="md:span-10">Medium Span 10</option>
        <option value="md:span-11">Medium Span 11</option>
        <option value="md:span-12">Medium Span 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-lg-Span" v-model="lgSpan">
        <option value="lg:span-1">Large Span 1</option>
        <option value="lg:span-2">Large Span 2</option>
        <option value="lg:span-3">Large Span 3</option>
        <option value="lg:span-4">Large Span 4</option>
        <option value="lg:span-5">Large Span 5</option>
        <option value="lg:span-6">Large Span 6</option>
        <option value="lg:span-7">Large Span 7</option>
        <option value="lg:span-8">Large Span 8</option>
        <option value="lg:span-9">Large Span 9</option>
        <option value="lg:span-10">Large Span 10</option>
        <option value="lg:span-11">Large Span 11</option>
        <option value="lg:span-12">Large Span 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-columns-xl-Span" v-model="xlSpan">
        <option value="xl:span-1">Extra Large Span 1</option>
        <option value="xl:span-2">Extra Large Span 2</option>
        <option value="xl:span-3">Extra Large Span 3</option>
        <option value="xl:span-4">Extra Large Span 4</option>
        <option value="xl:span-5">Extra Large Span 5</option>
        <option value="xl:span-6">Extra Large Span 6</option>
        <option value="xl:span-7">Extra Large Span 7</option>
        <option value="xl:span-8">Extra Large Span 8</option>
        <option value="xl:span-9">Extra Large Span 9</option>
        <option value="xl:span-10">Extra Large Span 10</option>
        <option value="xl:span-11">Extra Large Span 11</option>
        <option value="xl:span-12">Extra Large Span 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .columns properties

These are the default values for the `.columns` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-columns-color` | Value for color. | `var(--graupl-color)` |
| `--graupl-columns-background` | Value for background. | `var(--graupl-background)` |
| `--graupl-columns-display` | Value for display. | `flex` |
| `--graupl-columns-block-size` | Value for block size. | `0` |
| `--graupl-columns-opacity` | Value for opacity. | `0` |
| `--graupl-columns-row-gap` | The gap between the rows of the columns. | `var(--graupl-spacer-5)` |
| `--graupl-columns-column-gap` | The gap between the columns of the columns. | `var(--graupl-spacer-5)` |
| `--graupl-columns-count` | The maximum number of columns. | `3` |
| `--graupl-columns-content-max-width` | The maximum width of the content inside the columns. | `var(--graupl-content-max-width)` |
| `--graupl-columns-min-width` | The minimum width of each column. | `calc((var(--graupl-columns-content-max-width) - var(--graupl-columns-column-gap) * (var(--graupl-columns-count) - 1)) / var(--graupl-columns-count))` |
| `--graupl-columns-max-width` | The maximum width of each column. | `1fr` |
| `--graupl-columns-grid-template-columns` | The grid template columns for the columns. | `repeat(auto-fit, minmax(var(--graupl-columns-min-width), var(--graupl-columns-max-width)))` |
| `--graupl-columns-span` | The span of each column. | `1` |
| `--graupl-columns-background` | The background of the columns component. | `var(--graupl-background)` |
| `--graupl-columns-color` | The text color of the columns component. | `var(--graupl-color)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | The base selector for the component. | `"."` |
| `$modifier-selector-base` | The base selector for component modifiers. | `"."` |
| `$generate-base-theme-map` | Flag to generate the base theme map. | `true` |
| `$themeable` | Flag to generate theme modifiers. | `false` |
| `$screen-aware` | Enables screen-aware column variants. | `true` |
| `$theme-aware` | Enables theme-aware column variants. | `false` |
| `$scheme-aware` | Enables scheme-aware column variants. | `false` |
| `$state-aware` | Enables state-aware column variants. | `false` |
| `$container-aware` | Enables container-aware column variants. | `true` |
| `$force-single-columns` | Flag to enable forced single column layout on small screens. | `true` |
| `$columns-selector-base` | The base selector for the columns component. | `"."` |
| `$columns-selector` | The selector for the columns component. | `"columns"` |
| `$columns-theme-selector-base` | The selector base for columns theme modifiers. | `"."` |
| `$columns-theme-selector-prefix` | The columns theme modifier selector prefix. | `""` |
| `$columns-count-selector-base` | The base selector for the count class. | `"."` |
| `$columns-count-selector-prefix` | The prefix for the count class. | `"count-"` |
| `$columns-span-selector-base` | The base selector for the span class. | `"."` |
| `$columns-span-selector-prefix` | The prefix for the span class. | `"span-"` |
| `$columns-fixed-selector-base` | The base selector for the fixed class. | `"."` |
| `$columns-fixed-selector` | The selector for the fixed class. | `"fixed"` |
| `$columns-screen-aware-selector-prefix` | Prefix to the screen-aware portion of column selectors. | `""` |
| `$columns-screen-aware-selector-suffix` | Suffix to the screen-aware portion of column selectors. | `""` |
| `$columns-screen-aware-selector-separator` | Separator inserted for screen-aware column selectors. | `"\\:"` |
| `$columns-theme-aware-selector-prefix` | Prefix to the theme-aware portion of column selectors. | `""` |
| `$columns-theme-aware-selector-suffix` | Suffix to the theme-aware portion of column selectors. | `"-theme"` |
| `$columns-theme-aware-selector-separator` | Separator inserted for theme-aware column selectors. | `"\\:"` |
| `$columns-scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of column selectors. | `""` |
| `$columns-scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of column selectors. | `"-mode"` |
| `$columns-scheme-aware-selector-separator` | Separator inserted for scheme-aware column selectors. | `"\\:"` |
| `$columns-state-aware-selector-prefix` | Prefix to the state-aware portion of column selectors. | `""` |
| `$columns-state-aware-selector-suffix` | Suffix to the state-aware portion of column selectors. | `""` |
| `$columns-state-aware-selector-separator` | Separator inserted for state-aware column selectors. | `"\\:"` |
| `$columns-container-aware-selector-prefix` | Prefix to the container-aware portion of column selectors. | `"cq\\:"` |
| `$columns-container-aware-selector-suffix` | Suffix to the container-aware portion of column selectors. | `""` |
| `$columns-container-aware-selector-separator` | Separator inserted for container-aware column selectors. | `"\\:"` |
| `$columns-max-width` | The maximum width of each column. | `1fr` |
| `$columns-count` | The default number of columns. | `3` |
| `$columns-min-count` | The minimum number of columns used to generate `.count-#` classes. | `1` |
| `$columns-max-count` | The maximum number of columns used to generate `.count-#` classes. | `12` |
| `$columns-span` | The default span of each column. | `1` |
| `$columns-theme-mappings` | Map of properties/shades for columns themes. | `()` |
| `$columns-theme-map` | Expanded map of properties/colors/shades. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
