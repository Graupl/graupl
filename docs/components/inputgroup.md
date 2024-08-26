# Input Group

Defaults

```jsx
// Input group selectors.
$input-group-selector: ".input-group" !default;
$input-group-inline-selector: ".inline" !default;
$input-group-help-text-selector: ".help-text" !default;

// Grid names.
$input-group-grid-label-name: label !default;
$input-group-grid-input-name: input !default;
$input-group-grid-help-name: help !default;

// Input group properties.
$input-group-grid-template-columns: 100% !default;
$input-group-grid-template-rows: auto auto auto !default;

// Inline input group properties.
$input-group-inline-grid-template-columns: auto 1fr !default;
$input-group-inline-grid-template-rows: auto auto !default;

// Inner element properties.
$input-group-label-grid-area: $input-group-grid-label-name !default;
$input-group-input-grid-area: $input-group-grid-input-name !default;
$input-group-help-grid-area: $input-group-grid-help-name !default;
```

Variables

Input group properties

```jsx
--#{root-defaults.$prefix}-input-group-grid-template-areas
--#{root-defaults.$prefix}-input-group-grid-template-columns
--#{root-defaults.$prefix}-input-group-grid-template-rows
--#{root-defaults.$prefix}-input-group-row-gap
--#{root-defaults.$prefix}-input-group-column-gap
--#{root-defaults.$prefix}-input-group-gap
```

Inline input group properties

```jsx
--#{root-defaults.$prefix}-input-group-inline-grid-template-areas
--#{root-defaults.$prefix}-input-group-inline-grid-template-columns
--#{root-defaults.$prefix}-input-group-inline-grid-template-rows
```

Inner element properties

```jsx
--#{root-defaults.$prefix}-input-group-label-grid-area
--#{root-defaults.$prefix}-input-group-input-grid-area
--#{root-defaults.$prefix}-input-group-help-grid-area
```

Markup

```jsx
    <div class="py-10 full-width container">
      <h2>Form elements</h2>
      <p>Graupl provides default styling for all form elements.</p>
      <form class="full-width rg-4">
        <div class="input-group">
          <label for="input">Input</label>
          <input type="text" placeholder="Input" id="input">
          <small class="help-text">This is some help text to assist with knowing what the field is about.</small>
        </div>
        <div class="input-group inline"><label for="input-readonly">Readonly Input</label>
          <input type="text" placeholder="Readonly Input" id="input-readonly" value="Readonly Input" readonly>
          <small class="help-text">This is some help text to assist with knowing what the field is about.</small>
        </div>
        <div class="input-group"><label for="input-disabled">Disabled Input</label>
          <input type="text" placeholder="Disabled Input" id="input-disabled" disabled>
          <small class="help-text">This is some help text to assist with knowing what the field is about.</small>
        </div>
        <div class="input-group inline"><label for="textarea">Textarea</label>
          <textarea class="textarea" placeholder="Textarea" id="textarea"></textarea>
        </div>
        <div class="input-group"><label for="textarea-readonly">Readonly Textarea</label>
          <textarea class="textarea" placeholder="Readonly Textarea" id="textarea-readonly"
            readonly>Readonly Textarea</textarea>
        </div>
        <div class="input-group"><label for="textarea-disabled">Disabled Textarea</label>
          <textarea class="textarea" placeholder="Disabled Textarea" id="textarea-disabled" disabled></textarea>
        </div>
        <div class="input-group inline"><label for="select">Select</label>
          <select id="select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <optgroup label="Group 1">
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </optgroup>
          </select>
        </div>
        <div class="input-group"><label for="select-disabled">Disabled Select</label>
          <select id="select-disabled" disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <optgroup label="Group 1">
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </optgroup>
          </select>
        </div>
        <div class="input-group"><label for"multi-select">Multi-select</label>
          <select id="multi-select" multiple>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <optgroup label="Group 1">
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </optgroup>
          </select>
        </div>
        <div class="input-group inline"><label for="multi-select-disabled">Disabled Multi-select</label>
          <select id="multi-select-disabled" multiple disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <optgroup label="Group 1">
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </optgroup>
          </select>
        </div>
        <fieldset>
          <legend>Checkboxes</legend>
          <label for="checkbox">
            <input type="checkbox" id="checkbox"> Checkbox</label>
          <label for="checkbox-checked">
            <input type="checkbox" id="checkbox-checked" checked> Checked Checkbox</label>
          <label for="checkbox-disabled">
            <input type="checkbox" id="checkbox-disabled" disabled> Disabled Checkbox</label>
        </fieldset>
        <fieldset>
          <legend>Radio Buttons</legend>
          <label for="radio"><input type="radio" id="radio" name="radio"> Radio</label>
          <label for="radio-checked"><input type="radio" id="radio-checked" name="radio" checked> Checked Radio</label>
          <label for="radio-disabled"><input type="radio" id="radio-disabled" name="radio" disabled> Disabled
            Radio</label>
        </fieldset>
        <fieldset disabled>
          <legend>Disabled Fieldset</legend>
          <label for="disabled-fieldset-checkbox">
            <input type="checkbox" id="disabled-fieldset-checkbox"> Checkbox</label>
        </fieldset>
        <div class="input-group"><label for="range">Range</label>
          <input type="range" class="range" id="range">
        </div>
      </form>
    </div>
```
