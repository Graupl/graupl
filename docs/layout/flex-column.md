<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const col = ref("col-1");
  const xsCol = ref("xs:col-1");
  const smCol = ref("sm:col-1");
  const mdCol = ref("md:col-1");
  const lgCol = ref("lg:col-1");
  const xlCol = ref("xl:col-1");
  const xsSize = ref("cq:xs:col-1");
  const smSize = ref("cq:sm:col-1");
  const mdSize = ref("cq:md:col-1");
  const lgSize = ref("cq:lg:col-1");
  const xlSize = ref("cq:xl:col-1");

  const exampleFlexColumns = computed(() => {

    const classes = col.value !== "default" ? col.value : "";

    return `
<div class="flex-columns">
  <div
    class="${classes} py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
    </div>
  </div>
  <div
    class="fill py-7 bg-primary-700 text-primary-100 px-5"> Fill
  </div>
  <div class="col-12 py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div
        class="${classes} py-7 bg-tertiary-700 text-primary-100 px-5">
      </div>
      <div
        class="fill py-7 bg-tertiary-700 text-primary-100 px-5"> Fill
      </div>
    </div>
  </div>
</div>
`
  });

  const exampleFlexColumnsSizeCol = computed(() => {

    const xsClasses = xsCol.value !== "default" ? xsCol.value : "";

    const smClasses = smCol.value !== "default" ? smCol.value : "";

    const mdClasses = mdCol.value !== "default" ? mdCol.value : "";

    const lgClasses = lgCol.value !== "default" ? lgCol.value : "";

    const xlClasses = xlCol.value !== "default" ? xlCol.value : "";

    return `
<div class="flex-columns">
  <div
    class="${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses} py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
    </div>
  </div>
  <div
    class="fill py-7 bg-primary-700 text-primary-100 px-5"> Fill
  </div>
  <div class="col-12 py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div
        class="${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses} py-7 bg-tertiary-700 text-primary-100 px-5">
      </div>
      <div
        class="fill py-7 bg-tertiary-700 text-primary-100 px-5"> Fill
      </div>
    </div>
  </div>
</div>
    `
  });

  const exampleFlexColumnsSize = computed(() => {

    const xsClasses = xsSize.value !== "default" ? xsSize.value : "";

    const smClasses = smSize.value !== "default" ? smSize.value : "";

    const mdClasses = mdSize.value !== "default" ? mdSize.value : "";

    const lgClasses = lgSize.value !== "default" ? lgSize.value : "";

    const xlClasses = xlSize.value !== "default" ? xlSize.value : "";

    return `
<div class="flex-columns">
  <div
    class="${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses} py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
      <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
    </div>
  </div>
  <div
    class="fill py-7 bg-primary-700 text-primary-100 px-5"> Fill
  </div>
  <div class="col-12 py-7 bg-primary-700 text-primary-100 px-5">
    <div class="flex-columns">
      <div
        class="${xsClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses} py-7 bg-tertiary-700 text-primary-100 px-5">
      </div>
      <div
        class="fill py-7 bg-tertiary-700 text-primary-100 px-5"> Fill
      </div>
    </div>
  </div>
</div>
  `
  });
</script>

# Flex-columns

The flex-columns component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.col-1` | Sets the number of flex-columns in the flex columns component to 1 unit width. |
| `.col-2` | Sets the number of flex-columns in the flex columns component to 2 unit width. |
| `.col-3` | Sets the number of flex-columns in the flex columns component to 3 unit width. |
| `.col-4` | Sets the number of flex-columns in the flex columns component to 4 unit width. |
| `.col-5` | Sets the number of flex-columns in the flex columns component to 5 unit width. |
| `.col-6` | Sets the number of flex-columns in the flex columns component to 6 unit width. |
| `.col-7` | Sets the number of flex-columns in the flex columns component to 7 unit width. |
| `.col-8` | Sets the number of flex-columns in the flex columns component to 8 unit width. |
| `.col-9` | Sets the number of flex-columns in the flex columns component to 9 unit width. |
| `.col-10` | Sets the number of flex-columns in the flex columns component to 10 unit width. |
| `.col-11` | Sets the number of flex-columns in the flex columns component to 11 unit width. |
| `.col-12` | Sets the number of flex-columns in the flex columns component to 12 unit width. |
| `.fill` | A class to set a column to fill the remaining space. |

<live-example :source-code="exampleFlexColumns" :key="col">
  <template #options>
    <div class="input-group">
      <select id="select-flex-columns-col" v-model="col">
        <option value="flex-columns">Flex-columns</option>
        <option value="col-1">Col 1</option>
        <option value="col-2">Col 2</option>
        <option value="col-3">Col 3</option>
        <option value="col-4">Col 4</option>
        <option value="col-5">Col 5</option>
        <option value="col-6">Col 6</option>
        <option value="col-7">Col 7</option>
        <option value="col-8">Col 8</option>
        <option value="col-9">Col 9</option>
        <option value="col-10">Col 10</option>
        <option value="col-11">Col 11</option>
        <option value="col-12">Col 12</option>
        <option value="fill">Fill</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .[size]:col properties

| Property Name | Description |
| --- | --- |
| `.xs:col-1` | Sets the number of flex-columns in the flex columns component to 1 on extra small screens. |
| `.xs:col-2` | Sets the number of flex-columns in the flex columns component to 2 on extra small screens. |
| `.xs:col-3` | Sets the number of flex-columns in the flex columns component to 3 on extra small screens. |
| `.xs:col-4` | Sets the number of flex-columns in the flex columns component to 4 on extra small screens. |
| `.xs:col-5` | Sets the number of flex-columns in the flex columns component to 5 on extra small screens. |
| `.xs:col-6` | Sets the number of flex-columns in the flex columns component to 6 on extra small screens. |
| `.xs:col-7` | Sets the number of flex-columns in the flex columns component to 7 on extra small screens. |
| `.xs:col-8` | Sets the number of flex-columns in the flex columns component to 8 on extra small screens. |
| `.xs:col-9` | Sets the number of flex-columns in the flex columns component to 9 on extra small screens. |
| `.xs:col-10` | Sets the number of flex-columns in the flex columns component to 10 on extra small screens. |
| `.xs:col-11` | Sets the number of flex-columns in the flex columns component to 11 on extra small screens. |
| `.xs:col-12` | Sets the number of flex-columns in the flex columns component to 12 on extra small screens. |
| `.sm:col-1` | Sets the number of flex-columns in the flex columns component to 1 on small screens. |
| `.sm:col-2` | Sets the number of flex-columns in the flex columns component to 2 on small screens. |
| `.sm:col-3` | Sets the number of flex-columns in the flex columns component to 3 on small screens. |
| `.sm:col-4` | Sets the number of flex-columns in the flex columns component to 4 on small screens. |
| `.sm:col-5` | Sets the number of flex-columns in the flex columns component to 5 on small screens. |
| `.sm:col-6` | Sets the number of flex-columns in the flex columns component to 6 on small screens. |
| `.sm:col-7` | Sets the number of flex-columns in the flex columns component to 7 on small screens. |
| `.sm:col-8` | Sets the number of flex-columns in the flex columns component to 8 on small screens. |
| `.sm:col-9` | Sets the number of flex-columns in the flex columns component to 9 on small screens. |
| `.sm:col-10` | Sets the number of flex-columns in the flex columns component to 10 on small screens. |
| `.sm:col-11` | Sets the number of flex-columns in the flex columns component to 11 on small screens. |
| `.sm:col-12` | Sets the number of flex-columns in the flex columns component to 12 on small screens. |
| `.md:col-1` | Sets the number of flex-columns in the flex columns component to 1 on medium screens. |
| `.md:col-2` | Sets the number of flex-columns in the flex columns component to 2 on medium screens. |
| `.md:col-3` | Sets the number of flex-columns in the flex columns component to 3 on medium screens. |
| `.md:col-4` | Sets the number of flex-columns in the flex columns component to 4 on medium screens. |
| `.md:col-5` | Sets the number of flex-columns in the flex columns component to 5 on medium screens. |
| `.md:col-6` | Sets the number of flex-columns in the flex columns component to 6 on medium screens. |
| `.md:col-7` | Sets the number of flex-columns in the flex columns component to 7 on medium screens. |
| `.md:col-8` | Sets the number of flex-columns in the flex columns component to 8 on medium screens. |
| `.md:col-9` | Sets the number of flex-columns in the flex columns component to 9 on medium screens. |
| `.md:col-10` | Sets the number of flex-columns in the flex columns component to 10 on medium screens. |
| `.md:col-11` | Sets the number of flex-columns in the flex columns component to 11 on medium screens. |
| `.md:col-12` | Sets the number of flex-columns in the flex columns component to 12 on medium screens. |
| `.lg:col-1` | Sets the number of flex-columns in the flex columns component to 1 on large screens. |
| `.lg:col-2` | Sets the number of flex-columns in the flex columns component to 2 on large screens. |
| `.lg:col-3` | Sets the number of flex-columns in the flex columns component to 3 on large screens. |
| `.lg:col-4` | Sets the number of flex-columns in the flex columns component to 4 on large screens. |
| `.lg:col-5` | Sets the number of flex-columns in the flex columns component to 5 on large screens. |
| `.lg:col-6` | Sets the number of flex-columns in the flex columns component to 6 on large screens. |
| `.lg:col-7` | Sets the number of flex-columns in the flex columns component to 7 on large screens. |
| `.lg:col-8` | Sets the number of flex-columns in the flex columns component to 8 on large screens. |
| `.lg:col-9` | Sets the number of flex-columns in the flex columns component to 9 on large screens. |
| `.lg:col-10` | Sets the number of flex-columns in the flex columns component to 10 on large screens. |
| `.lg:col-11` | Sets the number of flex-columns in the flex columns component to 11 on large screens. |
| `.lg:col-12` | Sets the number of flex-columns in the flex columns component to 12 on large screens. |
| `.xl:col-1` | Sets the number of flex-columns in the flex columns component to 1 on extra large screens. |
| `.xl:col-2` | Sets the number of flex-columns in the flex columns component to 2 on extra large screens. |
| `.xl:col-3` | Sets the number of flex-columns in the flex columns component to 3 on extra large screens. |
| `.xl:col-4` | Sets the number of flex-columns in the flex columns component to 4 on extra large screens. |
| `.xl:col-5` | Sets the number of flex-columns in the flex columns component to 5 on extra large screens. |
| `.xl:col-6` | Sets the number of flex-columns in the flex columns component to 6 on extra large screens. |
| `.xl:col-7` | Sets the number of flex-columns in the flex columns component to 7 on extra large screens. |
| `.xl:col-8` | Sets the number of flex-columns in the flex columns component to 8 on extra large screens. |
| `.xl:col-9` | Sets the number of flex-columns in the flex columns component to 9 on extra large screens. |
| `.xl:col-10` | Sets the number of flex-columns in the flex columns component to 10 on extra large screens. |
| `.xl:col-11` | Sets the number of flex-columns in the flex columns component to 11 on extra large screens. |
| `.xl:col-12` | Sets the number of flex-columns in the flex columns component to 12 on extra large screens. |

<live-example :source-code="exampleFlexColumnsSizeCol" :key="xsCol-smCol-mdCol-lgCol-xlCol">
  <template #options>
    <div class="input-group">
      <select id="select-flex-columns-xs-col" v-model="xsCol">
        <option value="xs:col-1">Extra Small Col 1</option>
        <option value="xs:col-2">Extra Small Col 2</option>
        <option value="xs:col-3">Extra Small Col 3</option>
        <option value="xs:col-4">Extra Small Col 4</option>
        <option value="xs:col-5">Extra Small Col 5</option>
        <option value="xs:col-6">Extra Small Col 6</option>
        <option value="xs:col-7">Extra Small Col 7</option>
        <option value="xs:col-8">Extra Small Col 8</option>
        <option value="xs:col-9">Extra Small Col 9</option>
        <option value="xs:col-10">Extra Small Col 10</option>
        <option value="xs:col-11">Extra Small Col 11</option>
        <option value="xs:col-12">Extra Small Col 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-sm-col" v-model="smCol">
        <option value="sm:col-1">Small Col 1</option>
        <option value="sm:col-2">Small Col 2</option>
        <option value="sm:col-3">Small Col 3</option>
        <option value="sm:col-4">Small Col 4</option>
        <option value="sm:col-5">Small Col 5</option>
        <option value="sm:col-6">Small Col 6</option>
        <option value="sm:col-7">Small Col 7</option>
        <option value="sm:col-8">Small Col 8</option>
        <option value="sm:col-9">Small Col 9</option>
        <option value="sm:col-10">Small Col 10</option>
        <option value="sm:col-11">Small Col 11</option>
        <option value="sm:col-12">Small Col 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-md-col" v-model="mdCol">
        <option value="md:col-1">Medium Col 1</option>
        <option value="md:col-2">Medium Col 2</option>
        <option value="md:col-3">Medium Col 3</option>
        <option value="md:col-4">Medium Col 4</option>
        <option value="md:col-5">Medium Col 5</option>
        <option value="md:col-6">Medium Col 6</option>
        <option value="md:col-7">Medium Col 7</option>
        <option value="md:col-8">Medium Col 8</option>
        <option value="md:col-9">Medium Col 9</option>
        <option value="md:col-10">Medium Col 10</option>
        <option value="md:col-11">Medium Col 11</option>
        <option value="md:col-12">Medium Col 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-lg-col" v-model="lgCol">
        <option value="lg:col-1">Large Col 1</option>
        <option value="lg:col-2">Large Col 2</option>
        <option value="lg:col-3">Large Col 3</option>
        <option value="lg:col-4">Large Col 4</option>
        <option value="lg:col-5">Large Col 5</option>
        <option value="lg:col-6">Large Col 6</option>
        <option value="lg:col-7">Large Col 7</option>
        <option value="lg:col-8">Large Col 8</option>
        <option value="lg:col-9">Large Col 9</option>
        <option value="lg:col-10">Large Col 10</option>
        <option value="lg:col-11">Large Col 11</option>
        <option value="lg:col-12">Large Col 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-xl-col" v-model="xlCol">
        <option value="xl:col-1">Extra Large Col 1</option>
        <option value="xl:col-2">Extra Large Col 2</option>
        <option value="xl:col-3">Extra Large Col 3</option>
        <option value="xl:col-4">Extra Large Col 4</option>
        <option value="xl:col-5">Extra Large Col 5</option>
        <option value="xl:col-6">Extra Large Col 6</option>
        <option value="xl:col-7">Extra Large Col 7</option>
        <option value="xl:col-8">Extra Large Col 8</option>
        <option value="xl:col-9">Extra Large Col 9</option>
        <option value="xl:col-10">Extra Large Col 10</option>
        <option value="xl:col-11">Extra Large Col 11</option>
        <option value="xl:col-12">Extra Large Col 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .cq:[size]:col properties

| Property Name | Description |
| --- | --- |
| `.cq:xs:col-1` | Sets the size of a column in the flex columns component to 1 unit width in extra small containers. |
| `.cq:xs:col-2` | Sets the size of a column in the flex columns component to 2 unit width in extra small containers. |
| `.cq:xs:col-3` | Sets the size of a column in the flex columns component to 3 unit width in extra small containers. |
| `.cq:xs:col-4` | Sets the size of a column in the flex columns component to 4 unit width in extra small containers. |
| `.cq:xs:col-5` | Sets the size of a column in the flex columns component to 5 unit width in extra small containers. |
| `.cq:xs:col-6` | Sets the size of a column in the flex columns component to 6 unit width in extra small containers. |
| `.cq:xs:col-7` | Sets the size of a column in the flex columns component to 7 unit width in extra small containers. |
| `.cq:xs:col-8` | Sets the size of a column in the flex columns component to 8 unit width in extra small containers. |
| `.cq:xs:col-9` | Sets the size of a column in the flex columns component to 9 unit width in extra small containers. |
| `.cq:xs:col-10` | Sets the size of a column in the flex columns component to 10 unit width in extra small containers. |
| `.cq:xs:col-11` | Sets the size of a column in the flex columns component to 11 unit width in extra small containers. |
| `.cq:xs:col-12` | Sets the size of a column in the flex columns component to 12 unit width in extra small containers. |
| `.cq:sm:col-1` | Sets the size of a column in the flex columns component to 1 unit width in small containers. |
| `.cq:sm:col-2` | Sets the size of a column in the flex columns component to 2 unit width in small containers. |
| `.cq:sm:col-3` | Sets the size of a column in the flex columns component to 3 unit width in small containers. |
| `.cq:sm:col-4` | Sets the size of a column in the flex columns component to 4 unit width in small containers. |
| `.cq:sm:col-5` | Sets the size of a column in the flex columns component to 5 unit width in small containers. |
| `.cq:sm:col-6` | Sets the size of a column in the flex columns component to 6 unit width in small containers. |
| `.cq:sm:col-7` | Sets the size of a column in the flex columns component to 7 unit width in small containers. |
| `.cq:sm:col-8` | Sets the size of a column in the flex columns component to 8 unit width in small containers. |
| `.cq:sm:col-9` | Sets the size of a column in the flex columns component to 9 unit width in small containers. |
| `.cq:sm:col-10` | Sets the size of a column in the flex columns component to 10 unit width in small containers. |
| `.cq:sm:col-11` | Sets the size of a column in the flex columns component to 11 unit width in small containers. |
| `.cq:sm:col-12` | Sets the size of a column in the flex columns component to 12 unit width in small containers. |
| `.cq:md:col-1` | Sets the size of a column in the flex columns component to 1 unit width in medium containers. |
| `.cq:md:col-2` | Sets the size of a column in the flex columns component to 2 unit width in medium containers. |
| `.cq:md:col-3` | Sets the size of a column in the flex columns component to 3 unit width in medium containers. |
| `.cq:md:col-4` | Sets the size of a column in the flex columns component to 4 unit width in medium containers. |
| `.cq:md:col-5` | Sets the size of a column in the flex columns component to 5 unit width in medium containers. |
| `.cq:md:col-6` | Sets the size of a column in the flex columns component to 6 unit width in medium containers. |
| `.cq:md:col-7` | Sets the size of a column in the flex columns component to 7 unit width in medium containers. |
| `.cq:md:col-8` | Sets the size of a column in the flex columns component to 8 unit width in medium containers. |
| `.cq:md:col-9` | Sets the size of a column in the flex columns component to 9 unit width in medium containers. |
| `.cq:md:col-10` | Sets the size of a column in the flex columns component to 10 unit width in medium containers. |
| `.cq:md:col-11` | Sets the size of a column in the flex columns component to 11 unit width in medium containers. |
| `.cq:md:col-12` | Sets the size of a column in the flex columns component to 12 unit width in medium containers. |
| `.cq:lg:col-1` | Sets the size of a column in the flex columns component to 1 unit width in large containers. |
| `.cq:lg:col-2` | Sets the size of a column in the flex columns component to 2 unit width in large containers. |
| `.cq:lg:col-3` | Sets the size of a column in the flex columns component to 3 unit width in large containers. |
| `.cq:lg:col-4` | Sets the size of a column in the flex columns component to 4 unit width in large containers. |
| `.cq:lg:col-5` | Sets the size of a column in the flex columns component to 5 unit width in large containers. |
| `.cq:lg:col-6` | Sets the size of a column in the flex columns component to 6 unit width in large containers. |
| `.cq:lg:col-7` | Sets the size of a column in the flex columns component to 7 unit width in large containers. |
| `.cq:lg:col-8` | Sets the size of a column in the flex columns component to 8 unit width in large containers. |
| `.cq:lg:col-9` | Sets the size of a column in the flex columns component to 9 unit width in large containers. |
| `.cq:lg:col-10` | Sets the size of a column in the flex columns component to 10 unit width in large containers. |
| `.cq:lg:col-11` | Sets the size of a column in the flex columns component to 11 unit width in large containers. |
| `.cq:lg:col-12` | Sets the size of a column in the flex columns component to 12 unit width in large containers. |
| `.cq:xl:col-1` | Sets the size of a column in the flex columns component to 1 unit width in extra large containers. |
| `.cq:xl:col-2` | Sets the size of a column in the flex columns component to 2 unit width in extra large containers. |
| `.cq:xl:col-3` | Sets the size of a column in the flex columns component to 3 unit width in extra large containers. |
| `.cq:xl:col-4` | Sets the size of a column in the flex columns component to 4 unit width in extra large containers. |
| `.cq:xl:col-5` | Sets the size of a column in the flex columns component to 5 unit width in extra large containers. |
| `.cq:xl:col-6` | Sets the size of a column in the flex columns component to 6 unit width in extra large containers. |
| `.cq:xl:col-7` | Sets the size of a column in the flex columns component to 7 unit width in extra large containers. |
| `.cq:xl:col-8` | Sets the size of a column in the flex columns component to 8 unit width in extra large containers. |
| `.cq:xl:col-9` | Sets the size of a column in the flex columns component to 9 unit width in extra large containers. |
| `.cq:xl:col-10` | Sets the size of a column in the flex columns component to 10 unit width in extra large containers. |
| `.cq:xl:col-11` | Sets the size of a column in the flex columns component to 11 unit width in extra large containers. |
| `.cq:xl:col-12` | Sets the size of a column in the flex columns component to 12 unit width in extra large containers. |

<live-example :source-code="exampleFlexColumnsSize" :key="`${xsSize}-${smSize}-${mdSize}-${lgSize}-${xlSize}`">
  <template #options>
    <div class="input-group">
      <select id="select-flex-columns-xs-size" v-model="xsSize">
        <option value="cq:xs:col-1">Extra Small Size 1</option>
        <option value="cq:xs:col-2">Extra Small Size 2</option>
        <option value="cq:xs:col-3">Extra Small Size 3</option>
        <option value="cq:xs:col-4">Extra Small Size 4</option>
        <option value="cq:xs:col-5">Extra Small Size 5</option>
        <option value="cq:xs:col-6">Extra Small Size 6</option>
        <option value="cq:xs:col-7">Extra Small Size 7</option>
        <option value="cq:xs:col-8">Extra Small Size 8</option>
        <option value="cq:xs:col-9">Extra Small Size 9</option>
        <option value="cq:xs:col-10">Extra Small Size 10</option>
        <option value="cq:xs:col-11">Extra Small Size 11</option>
        <option value="cq:xs:col-12">Extra Small Size 12</option>
      </select>
      <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-sm-size" v-model="smSize">
        <option value="cq:sm:col-1">Small Size 1</option>
        <option value="cq:sm:col-2">Small Size 2</option>
        <option value="cq:sm:col-3">Small Size 3</option>
        <option value="cq:sm:col-4">Small Size 4</option>
        <option value="cq:sm:col-5">Small Size 5</option>
        <option value="cq:sm:col-6">Small Size 6</option>
        <option value="cq:sm:col-7">Small Size 7</option>
        <option value="cq:sm:col-8">Small Size 8</option>
        <option value="cq:sm:col-9">Small Size 9</option>
        <option value="cq:sm:col-10">Small Size 10</option>
        <option value="cq:sm:col-11">Small Size 11</option>
        <option value="cq:sm:col-12">Small Size 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-md-Size" v-model="mdSize">
        <option value="cq:md:col-1">Medium Size 1</option>
        <option value="cq:md:col-2">Medium Size 2</option>
        <option value="cq:md:col-3">Medium Size 3</option>
        <option value="cq:md:col-4">Medium Size 4</option>
        <option value="cq:md:col-5">Medium Size 5</option>
        <option value="cq:md:col-6">Medium Size 6</option>
        <option value="cq:md:col-7">Medium Size 7</option>
        <option value="cq:md:col-8">Medium Size 8</option>
        <option value="cq:md:col-9">Medium Size 9</option>
        <option value="cq:md:col-10">Medium Size 10</option>
        <option value="cq:md:col-11">Medium Size 11</option>
        <option value="cq:md:col-12">Medium Size 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-lg-Size" v-model="lgSize">
        <option value="cq:lg:col-1">Large Size 1</option>
        <option value="cq:lg:col-2">Large Size 2</option>
        <option value="cq:lg:col-3">Large Size 3</option>
        <option value="cq:lg:col-4">Large Size 4</option>
        <option value="cq:lg:col-5">Large Size 5</option>
        <option value="cq:lg:col-6">Large Size 6</option>
        <option value="cq:lg:col-7">Large Size 7</option>
        <option value="cq:lg:col-8">Large Size 8</option>
        <option value="cq:lg:col-9">Large Size 9</option>
        <option value="cq:lg:col-10">Large Size 10</option>
        <option value="cq:lg:col-11">Large Size 11</option>
        <option value="cq:lg:col-12">Large Size 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
    <div class="input-group">
      <select id="select-flex-columns-xl-Size" v-model="xlSize">
        <option value="cq:xl:col-1">Extra Large Size 1</option>
        <option value="cq:xl:col-2">Extra Large Size 2</option>
        <option value="cq:xl:col-3">Extra Large Size 3</option>
        <option value="cq:xl:col-4">Extra Large Size 4</option>
        <option value="cq:xl:col-5">Extra Large Size 5</option>
        <option value="cq:xl:col-6">Extra Large Size 6</option>
        <option value="cq:xl:col-7">Extra Large Size 7</option>
        <option value="cq:xl:col-8">Extra Large Size 8</option>
        <option value="cq:xl:col-9">Extra Large Size 9</option>
        <option value="cq:xl:col-10">Extra Large Size 10</option>
        <option value="cq:xl:col-11">Extra Large Size 11</option>
        <option value="cq:xl:col-12">Extra Large Size 12</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .flex-columns properties

These are the default values for the `.flex-columns` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-flex-columns-row-gap` | The gap between the rows of the flex columns. | `var(--graupl-spacer-5)` |
| `--graupl-flex-columns-column-gap` | The gap between the columns of the flex columns. | `var(--graupl-spacer-5)` |
| `--graupl-flex-columns-size` | The size of a column. | `auto` |
| `--graupl-flex-columns-max-width` | The maximum width of a column. | `unset` |
| `--graupl-flex-columns-container-type` | The container type applied to the flex columns component. | `inline-size` |
| `--graupl-flex-columns-background` | The background of the flex columns component. | `var(--graupl-background)` |
| `--graupl-flex-columns-color` | The text color of the flex columns component. | `var(--graupl-color)` |

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
| `$flex-columns-selector-base` | The base selector for the flex columns component. | `"."` |
| `$flex-columns-selector` | The selector for the flex columns component. | `"flex-columns"` |
| `$flex-columns-theme-selector-base` | The selector base for flex columns theme modifiers. | `"."` |
| `$flex-columns-theme-selector-prefix` | The flex columns theme modifier selector prefix. | `""` |
| `$flex-columns-column-selector-base` | The base selector for the column class. | `"."` |
| `$flex-columns-column-selector` | The selector for the column class. | `"col-"` |
| `$flex-columns-fill-selector-base` | The base selector for the fill class. | `"."` |
| `$flex-columns-fill-selector` | The selector for the fill class. | `"fill"` |
| `$flex-columns-column-screen-aware-selector-prefix` | Prefix to the screen-aware portion of column selectors. | `""` |
| `$flex-columns-column-screen-aware-selector-suffix` | Suffix to the screen-aware portion of column selectors. | `""` |
| `$flex-columns-column-screen-aware-selector-separator` | Separator inserted for screen-aware column selectors. | `"\\:"` |
| `$flex-columns-column-theme-aware-selector-prefix` | Prefix to the theme-aware portion of column selectors. | `""` |
| `$flex-columns-column-theme-aware-selector-suffix` | Suffix to the theme-aware portion of column selectors. | `"-theme"` |
| `$flex-columns-column-theme-aware-selector-separator` | Separator inserted for theme-aware column selectors. | `"\\:"` |
| `$flex-columns-column-scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of column selectors. | `""` |
| `$flex-columns-column-scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of column selectors. | `"-mode"` |
| `$flex-columns-column-scheme-aware-selector-separator` | Separator inserted for scheme-aware column selectors. | `"\\:"` |
| `$flex-columns-column-state-aware-selector-prefix` | Prefix to the state-aware portion of column selectors. | `""` |
| `$flex-columns-column-state-aware-selector-suffix` | Suffix to the state-aware portion of column selectors. | `""` |
| `$flex-columns-column-state-aware-selector-separator` | Separator inserted for state-aware column selectors. | `"\\:"` |
| `$flex-columns-column-container-aware-selector-prefix` | Prefix to the container-aware portion of column selectors. | `"cq\\:"` |
| `$flex-columns-column-container-aware-selector-suffix` | Suffix to the container-aware portion of column selectors. | `""` |
| `$flex-columns-column-container-aware-selector-separator` | Separator inserted for container-aware column selectors. | `"\\:"` |
| `$flex-columns-min-count` | The minimum number of columns used to generate `.col-#` classes. | `1` |
| `$flex-columns-max-count` | The maximum number of columns used to generate `.col-#` classes. | `12` |
| `$flex-columns-size` | The default size of a column. | `auto` |
| `$flex-columns-max-width` | The default maximum width of a column. | `unset` |
| `$flex-columns-container-type` | The container type applied to the flex columns component. | `"inline-size"` |
| `$flex-columns-theme-mappings` | Map of properties/shades for flex columns themes. | `()` |
| `$flex-columns-theme-map` | Expanded map of properties/colors/shades. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
