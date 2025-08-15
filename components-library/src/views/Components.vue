<script setup>
import { onMounted } from "vue";
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";
import clVariativeComponent from "../components/VariativeComponent.vue";
import AccordionGenerator from "@graupl/core/src/accordion/generator.js";
import NavigationGenerator from "@graupl/core/src/navigation/generator.js";
import AlertGenerator from "@graupl/core/src/alert/generator.js";
import CarouselGenerator from "@graupl/core/src/carousel/generator.js";

const tableOptions = [
  { text: "Striped Columns", value: "striped-columns" },
  { text: "Striped Rows", value: "striped-rows" },
  { text: "Bordered", value: "bordered" },
  { text: "Collapsed", value: "collapsed" },
  { text: "Hoverable", value: "hoverable" },
];

onMounted(() => {
  NavigationGenerator();
  AlertGenerator();
  AccordionGenerator();
  CarouselGenerator();
});
</script>

<template>
  <cl-view
    name="Components"
    description="A component in Graupl is a reusable piece of UI that can be used across different parts of an application. Components can be simple like buttons and links, or complex like accordions and forms."
    class="container"
    content-class="container rg-5"
  >
    <cl-section
      name="Links"
      description="Defining different styles for all possible types of links gives sighted users context for what will happen when they click a link."
      class="container"
      content-class="container"
    >
      <ul class="display-flex flex-col g-4 list-style-none m-0 px-0 py-5">
        <li>
          <a href="#section-links">Basic link </a>
        </li>
        <li>
          <a href="#section-links" disabled>Disabled link </a>
        </li>
        <li>
          <a href="https://google.ca" class="focus">Focused link </a>
        </li>
        <li>
          <a href="#section-links" class="hover">Hovered link </a>
        </li>
        <li>
          <a href="https://google.ca" class="active">Active link </a>
        </li>
        <li>
          <a href="#section-links" class="visited">Visited link </a>
        </li>
      </ul>
    </cl-section>
    <cl-section
      name="Quotation"
      description="While blockquotes and quotes aren't the most common element to see on a page, it is still important to define their styles as they are a basic HTML element."
      class="container"
      content-class="container"
    >
      <p>
        Single line quotes can be handled with a simple quotation tag, which for
        the most part looks like emphasised text, however it does include a
        hidden <strong>cite</strong> property for screen readers.
        <q
          cite="https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/"
          >Many modern browsers will automatically add quotation marks to the
          quote</q
        >.
      </p>
      <p>
        In Graupl, you are given multiple colours of quotes based on the colours
        in your theme.
      </p>
      <cl-variative-component name="Blockquote" v-slot="{ variant }">
        <figure :class="`quote ${variant}`">
          <blockquote
            cite="https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/"
          >
            <p>
              Blockquote tags are used for distinguishing quoted text from the
              rest of the content.
            </p>
          </blockquote>
          <figcaption>
            John Rhea,
            <cite>Quoting in HTML: Quotations, Citations, and Blockquotes</cite>
          </figcaption>
        </figure>
      </cl-variative-component>
    </cl-section>
    <cl-section
      name="Buttons"
      description="Buttons are used mainly for forms and drawing a users attention to an interactive element on the page."
      class="container"
      content-class="container"
    >
      <p>
        In Graupl, you are given multiple colours of buttons based on the
        colours in your theme.
      </p>
      <cl-variative-component name="Buttons" v-slot="{ variant }">
        <ul class="columns g-3 list-style-none px-0 m-0">
          <li class="display-contents">
            <button :class="`button ${variant} `">Button</button>
          </li>
          <li class="display-contents">
            <button :class="`button ${variant}`" disabled>
              Disabled button
            </button>
          </li>
          <li class="display-contents">
            <a href="#" target="_blank" :class="`button ${variant} focus`"
              >Focused button</a
            >
          </li>
          <li class="display-contents">
            <a href="#" target="_blank" :class="`button ${variant} hover`"
              >Hovered button</a
            >
          </li>
          <li class="display-contents">
            <button :class="`button ${variant} active`">Active button</button>
          </li>
          <li class="display-contents">
            <a href="#" target="_blank" :class="`button link ${variant}`"
              >Link as a button</a
            >
          </li>
        </ul>
      </cl-variative-component>
    </cl-section>
    <cl-section
      name="Lists"
      description="The lists element creates either ordered or unordered lists to organize items"
      class="container"
      content-class="container"
    >
      <h4>Unordered list</h4>
      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        <li>List item five</li>
      </ul>
      <h4>Ordered list</h4>
      <ol>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        <li>List item five</li>
      </ol>
      <p>There are also styled lists inspired by Bootstrap's list groups.</p>
      <h4>Unordered styled list</h4>
      <ul class="list">
        <li class="list-item">
          <a href="#">List item 1</a>
        </li>
        <li class="list-item">List item 2</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 3</a>
        </li>
      </ul>
      <h4>Ordered styled list</h4>
      <p>
        You can add the list markers back in using utility classes (in this case
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.list-style-decimal</span
        >
        and
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.list-style-inside</span
        >).
      </p>
      <ol class="list list-style-decimal list-style-inside">
        <li class="list-item">
          <a href="#">List item 1</a>
        </li>
        <li class="list-item">List item 2</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 3</a>
        </li>
      </ol>
      <h4>Inline styled list</h4>
      <p>
        We can achieve an inline list by utilizing the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.columns</span
        >
        class.
      </p>
      <ul class="list columns">
        <li class="list-item">
          <a href="#">List item 1</a>
        </li>
        <li class="list-item">List item 2</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 3</a>
        </li>
        <li class="list-item">
          <a href="#">List item 4</a>
        </li>
        <li class="list-item">List item 5</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 6</a>
        </li>
      </ul>
      <p class="pt-5">
        We can also use the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.display-flex</span
        >
        utility class.
      </p>
      <ul class="list display-flex flex-wrap">
        <li class="list-item">
          <a href="#">List item 1</a>
        </li>
        <li class="list-item">List item 2</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 3</a>
        </li>
        <li class="list-item">
          <a href="#">List item 4</a>
        </li>
        <li class="list-item">List item 5</li>
        <li class="list-item">
          <a href="#" class="stretched">List item 6</a>
        </li>
      </ul>
    </cl-section>
    <cl-section
      name="Detail Disclosure"
      description="The detail element creates a disclosure widget in which information is visible only when the widget is toggled into an 'open' state."
      class="container"
      content-class="container"
    >
      <details>
        <summary>Summary Element</summary>
        <div>
          <p>This content gets displayed while the summary element is open.</p>
        </div>
      </details>
    </cl-section>
    <cl-section
      name="Tables"
      description="A table is used to display tabular data."
      class="container"
      content-class="container"
    >
      <cl-variative-component
        name="Table"
        :options="tableOptions"
        v-slot="{ variant, options }"
      >
        <div class="responsive-table">
          <table id="example-table" :class="[variant, ...options]">
            <caption>
              This is the caption for the table. It is used to add context to
              the data shown.
            </caption>
            <thead>
              <tr>
                <th scope="col">Header 1</th>
                <th scope="col">Header 2</th>
                <th scope="col">Header 3</th>
                <th scope="col">Header 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 4</td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
                <td>Row 2, Cell 4</td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
                <td>Row 3, Cell 4</td>
              </tr>
              <tr>
                <td>Row 4, Cell 1</td>
                <td>Row 4, Cell 2</td>
                <td>Row 4, Cell 3</td>
                <td>Row 4, Cell 4</td>
              </tr>
              <tr>
                <td>Row 5, Cell 1</td>
                <td>Row 5, Cell 2</td>
                <td>Row 5, Cell 3</td>
                <td>Row 5, Cell 4</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Footer 1</td>
                <td>Footer 2</td>
                <td>Footer 3</td>
                <td>Footer 4</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </cl-variative-component>
    </cl-section>
    <cl-section
      name="Forms elements"
      description="Form elements appear all over web applications. Making sure all possible inputs are styled will ensure all inputs have a unified look and feel."
      class="container"
      content-class="container container"
    >
      <form class="display-grid g-5">
        <div class="input-group">
          <label for="form-input">Input</label>
          <input
            id="form-input"
            type="text"
            aria-describedby="form-input-help"
          />
          <small id="form-input-help"
            >Help text can be used to specify what the user is expected to enter
            into a field.</small
          >
        </div>
        <div class="input-group inline">
          <label for="form-inline-input">Inline input</label>
          <input
            id="form-inline-input"
            type="text"
            aria-describedby="form-inline-input-help"
          />
          <small id="form-inline-input-help" class="help-text"
            >Help text can be used to specify what the user is expected to enter
            into a field.</small
          >
        </div>
        <div class="input-group">
          <label for="form-read-only-input"> Read-only input </label>
          <input
            id="form-read-only-input"
            type="text"
            readonly
            value="This is a value users cannot change"
          />
        </div>
        <div class="input-group">
          <label for="form-disabled-input"> Disabled input </label>
          <input id="form-disabled-input" type="text" disabled />
        </div>
        <div class="input-group">
          <label for="form-select">Select</label>
          <select id="form-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="input-group">
          <label for="form-disabled-select">Disabled select</label>
          <select id="form-disabled-select" disabled>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="input-group">
          <label for="form-multiple-select"> Multiple select </label>
          <select id="form-multiple-select" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="input-group">
          <label for="form-textarea">Textarea</label>
          <textarea id="form-textarea" rows="3" />
        </div>
        <div class="input-group">
          <label for="form-file-input"> Example file input </label>
          <input id="form-file-input" type="file" />
        </div>
        <div class="input-group">
          <label for="form-range-input">Range input</label>
          <input id="form-range-input" type="range" />
        </div>
        <fieldset>
          <legend>Checkboxes</legend>
          <label for="form-checkbox-1">
            <input id="form-checkbox-1" type="checkbox" value="" checked />
            Checkbox 1
          </label>
          <label for="form-checkbox-2"
            ><input id="form-checkbox-2" type="checkbox" value="" /> Checkbox 2
          </label>
          <label for="form-checkbox-3"
            ><input id="form-checkbox-3" type="checkbox" value="" disabled />
            Checkbox 3 (disabled)
          </label>
        </fieldset>
        <fieldset>
          <legend>Radio buttons</legend>
          <label for="form-radio-1"
            ><input
              id="form-radio-1"
              type="radio"
              name="componentsRadioInput"
              value="option1"
              checked
            />
            Radio 1
          </label>
          <label for="form-radio-2"
            ><input
              id="form-radio-2"
              type="radio"
              name="componentsRadioInput"
              value="option2"
            />
            Radio 2
          </label>
          <label for="form-radio-3"
            ><input
              id="form-radio-3"
              type="radio"
              name="componentsRadioInput"
              value="option3"
              disabled
            />
            Radio 3 (disabled)
          </label>
        </fieldset>
      </form>
    </cl-section>
    <cl-section
      name="Navigation"
      class="container"
      content-class="container"
      style="z-index: 2"
    >
      <nav
        class="navigation"
        data-graupl-menu-type="DisclosureMenu"
        data-graupl-menu-options="{'optionalKeySupport': true}"
      >
        <a class="navigation-branding" href="#">Graupl</a>
        <button
          class="navigation-toggle ml-auto mr-0"
          aria-label="Toggle navigation"
        ></button>
        <ul class="menu">
          <li class="menu-item"><a class="menu-link" href="#">Home</a></li>
          <li class="menu-item submenu-item">
            <button class="menu-link button link submenu-toggle">About</button>
            <ul class="submenu">
              <li class="menu-item">
                <a class="menu-link" href="#">About Us</a>
              </li>
              <li class="menu-item">
                <a class="menu-link" href="#">Our Team</a>
              </li>
              <li class="menu-item">
                <a class="menu-link" href="#">Our Mission</a>
              </li>
            </ul>
          </li>
          <li class="menu-item"><a class="menu-link" href="#">Blog</a></li>
          <li class="menu-item"><a class="menu-link" href="#">Portfolio</a></li>
          <li class="menu-item">
            <a class="menu-link button tertiary" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </cl-section>
    <cl-section name="Cards">
      <p>
        Cards using the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.top</span
        >
        class will have the image placed on the top while cards using the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.bottom</span
        >
        class will have the image placed on the bottom.
      </p>
      <div class="columns">
        <div class="card">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=1"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=2"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=3"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=4"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=5"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=6"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section name="Horizontal Cards">
      <p>
        Cards using the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.right</span
        >
        class will have the image placed on the right while cards using the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.left</span
        >
        class will have the image placed on the left.
      </p>
      <div class="columns count-2">
        <div class="card horizontal">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=1"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=2"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=3"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=4"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=5"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=6"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section name="Inverse Cards">
      <p>
        Cards using the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.inverse</span
        >
        class will have the image placed on the right if it is a horizontal card
        and on the bottom if it is a vertical card.
      </p>
      <p>
        This is mainly to provide a shortcut for horizontal cards that you'd
        like to use the
        <span
          class="display-inline-block text-tertiary-800 bg-secondary-100 px-1"
          >.bottom .right</span
        >
        classes on when the card is forced to be vertical.
      </p>
      <div class="columns count-2">
        <div class="card horizontal inverse">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=1"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal inverse">
          <div class="card-image">
            <img
              src="https://picsum.photos/1000/400?random=2"
              alt="Card image"
            />
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section name="Contained Cards">
      <p>
        Cards will adjust their layout based on the available space within their
        parent container.
      </p>
      <p>
        If you use horizontal cards in a grid, where each individual grid space
        is it's own container, the cards will go from horizontal to vertical
        depending on the layout.
      </p>
      <div class="flex-columns">
        <div class="col-6 lg:col-4 container-type-inline display-flex">
          <div class="card horizontal flex-grow">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=1"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 lg:col-4 container-type-inline display-flex">
          <div class="card horizontal flex-grow right">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=2"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 lg:col-4 container-type-inline display-flex">
          <div class="card horizontal flex-grow">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=3"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 lg:col-12 container-type-inline display-flex">
          <div class="card horizontal flex-grow right">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=4"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 xl:col-9 container-type-inline display-flex">
          <div class="card horizontal flex-grow">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=5"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 xl:col-3 container-type-inline display-flex">
          <div class="card horizontal flex-grow right">
            <div class="card-image">
              <img
                src="https://picsum.photos/1000/400?random=6"
                alt="Card image"
              />
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">Title</h3>
              </div>
              <div class="card-body">
                <p>This is some text that describes the card.</p>
              </div>
              <div class="card-footer">
                <a class="button stretched" href="#">Card Action</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section name="Alerts">
      <cl-variative-component name="Alert" v-slot="{ variant }">
        <div :class="`alert ${variant}`">
          <div class="alert-header">
            <h3 class="alert-title">Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Action</a>
          </div>
          <button class="alert-dismisser">x</button>
        </div>
      </cl-variative-component>
    </cl-section>
    <cl-section
      name="Accordions"
      description="The accordion holds items, each of which is a collapsible section. The accordion item acts as a wrapper for the title/header and the hidden content."
      class="container"
      content-class="container"
    >
      <div class="accordion">
        <div class="accordion-item hide">
          <div class="accordion-item-header">
            <div class="accordion-item-title">
              <button class="accordion-item-toggle">
                First accordion item
              </button>
            </div>
          </div>
          <div class="accordion-item-content">
            <div class="accordion-item-body">
              <p>
                This is the body of the item. It will only be displayed if the
                current accordion item is open.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item hide">
          <div class="accordion-item-header">
            <div class="accordion-item-title">
              <button class="accordion-item-toggle">
                Second accordion item
              </button>
            </div>
          </div>
          <div class="accordion-item-content">
            <div class="accordion-item-body">
              <p>
                This is the body of the item. It will only be displayed if the
                current accordion item is open.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item hide">
          <div class="accordion-item-header">
            <div class="accordion-item-title">
              <button class="accordion-item-toggle">
                Third accordion item
              </button>
            </div>
          </div>
          <div class="accordion-item-content">
            <div class="accordion-item-body">
              <p>
                This is the body of the item. It will only be displayed if the
                current accordion item is open.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item hide">
          <div class="accordion-item-header">
            <div class="accordion-item-title">
              <button class="accordion-item-toggle">
                Fourth accordion item
              </button>
            </div>
          </div>
          <div class="accordion-item-content">
            <div class="accordion-item-body">
              <p>
                This is the body of the item. It will only be displayed if the
                current accordion item is open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </cl-section>
    <cl-section name="Carousel">
      <section class="carousel">
        <div class="carousel-control-container">
          <button class="carousel-control autoplay"></button>
          <button class="carousel-control previous"></button>
          <button class="carousel-control next"></button>
        </div>
        <div class="carousel-tab-container">
          <button class="carousel-tab" aria-label="Carousel item 1"></button>
          <button class="carousel-tab" aria-label="Carousel item 2"></button>
          <button class="carousel-tab" aria-label="Carousel item 3"></button>
          <button class="carousel-tab" aria-label="Carousel item 4"></button>
          <button class="carousel-tab" aria-label="Carousel item 5"></button>
        </div>
        <div class="carousel-item-container">
          <div class="carousel-item">
            <div class="ratio sixteen-by-nine">
              <img
                class="force-ratio"
                src="https://picsum.photos/1400/600?random=1"
                alt="A placeholder carousel image"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ratio sixteen-by-nine">
              <img
                class="force-ratio"
                src="https://picsum.photos/1400/600?random=2"
                alt="A placeholder carousel image"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ratio sixteen-by-nine">
              <img
                class="force-ratio"
                src="https://picsum.photos/1400/600?random=3"
                alt="A placeholder carousel image"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ratio sixteen-by-nine">
              <img
                class="force-ratio"
                src="https://picsum.photos/1400/600?random=4"
                alt="A placeholder carousel image"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ratio sixteen-by-nine">
              <img
                class="force-ratio"
                src="https://picsum.photos/1400/600?random=5"
                alt="A placeholder carousel image"
              />
            </div>
          </div>
        </div>
      </section>
    </cl-section>
  </cl-view>
</template>
