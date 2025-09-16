<script setup>
import { computed } from 'vue';

const customCSS = ref(``);

const tableStyle = computed(() => {
  // Convert customCSS to a style object for :style binding
  // Only supports simple CSS variable assignments
  const style = {};
  customCSS.value.split(';').forEach(line => {
    const [key, value] = line.split(':').map(s => s && s.trim());
    if (key && value) {
      style[key] = value;
    }
  });
  return style;
});
import { ref } from 'vue';

const options = [
  { label: 'Bordered', class: 'bordered' },
  { label: 'Collapsed', class: 'collapsed' },
  { label: 'Striped Rows', class: 'striped-rows' },
  { label: 'Hoverable', class: 'hoverable' }
];

const activeClasses = ref(['bordered', 'striped-rows', 'hoverable']);

function toggleClass(cls) {
  if (activeClasses.value.includes(cls)) {
    activeClasses.value = activeClasses.value.filter(c => c !== cls);
  } else {
    activeClasses.value.push(cls);
  }
}
</script>

<template>
  <div class="button-grid">
    <button
      v-for="opt in options"
      :key="opt.class"
      :class="['button', { active: activeClasses.includes(opt.class) }]"
      @click="toggleClass(opt.class)"
      style="margin-right: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
    >
      <span>{{ opt.label }}</span>
    </button>
  </div>
  <div style="margin-bottom:2rem;">
    <label for="css-editor"><strong>Live Table CSS Variables</strong></label>
    <textarea
      id="css-editor"
      v-model="customCSS"
      rows="4"
      style="width:100%;margin-top:0.5rem;"
      placeholder="e.g. --table-header-background: #ffeedd; --table-border-color: #339af0;"
    ></textarea>
    <small>Enter CSS custom properties (variables) to update the table style live.</small>
  </div>
  <table :class="['table', ...activeClasses]" :style="tableStyle" id="demo-table">
    <caption>Sample Table</caption>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
        <td>Cell 4</td>
      </tr>
      <tr>
        <td>Cell 5</td>
        <td>Cell 6</td>
        <td>Cell 7</td>
        <td>Cell 8</td>
      </tr>
      <tr>
        <td>Cell 9</td>
        <td>Cell 10</td>
        <td>Cell 11</td>
        <td>Cell 12</td>
      </tr>
      <tr>
        <td>Cell 13</td>
        <td>Cell 14</td>
        <td>Cell 15</td>
        <td>Cell 16</td>
      </tr>
      <tr>
        <td>Cell 17</td>
        <td>Cell 18</td>
        <td>Cell 19</td>
        <td>Cell 20</td>
      </tr>
      <tr>
        <td>Cell 21</td>
        <td>Cell 22</td>
        <td>Cell 23</td>
        <td>Cell 24</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

</style>
