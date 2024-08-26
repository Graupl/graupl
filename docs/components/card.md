# Card

Defaults

```jsx
// Card selectors.
$card-selector: ".card" !default;
$card-image-selector: ".card-image" !default;
$card-content-selector: ".card-content" !default;
$card-body-selector: ".card-body" !default;
$card-header-selector: ".card-header" !default;
$card-footer-selector: ".card-footer" !default;
$card-title-selector: ".card-title" !default;
$horizontal-card-selector: ".horizontal" !default;
$horizontal-card-left-selector: ".left" !default;
$horizontal-card-right-selector: ".right" !default;
$vertical-card-top-selector: ".top" !default;
$vertical-card-bottom-selector: ".bottom" !default;
$inverse-card-selector: ".inverse" !default;

// Card properties.
$card-transform: none !default;
$card-hover-transform: $card-transform !default;

// Card layout properties.
$card-content-ratio: 1fr !default;
$card-image-ratio: auto !default;
$horizontal-card-content-ratio: 3fr !default;
$horizontal-card-image-ratio: 2fr !default;
```

Variables

Card Properties

```jsx
--#{root-defaults.$prefix}-card-padding-x
--#{root-defaults.$prefix}-card-padding-y
--#{root-defaults.$prefix}-card-padding
--#{root-defaults.$prefix}-card-transition
--#{root-defaults.$prefix}-card-transition-reduced-motion
```

Card transform properties

```jsx
--#{root-defaults.$prefix}-card-transform
--#{root-defaults.$prefix}-card-hover-transform
```

Card gap properties

```jsx
--#{root-defaults.$prefix}-card-column-gap
--#{root-defaults.$prefix}-card-row-gap
--#{root-defaults.$prefix}-card-gap
```

Card color properties

```jsx
--#{root-defaults.$prefix}-card-background
--#{root-defaults.$prefix}-card-color
```

Card border-properties

```jsx
--#{root-defaults.$prefix}-card-border-color
--#{root-defaults.$prefix}-card-top-left-border-radius
--#{root-defaults.$prefix}-card-top-right-border-radius
--#{root-defaults.$prefix}-card-bottom-left-border-radius
--#{root-defaults.$prefix}-card-bottom-right-border-radius
--#{root-defaults.$prefix}-card-border-radius
--#{root-defaults.$prefix}-card-border-style
--#{root-defaults.$prefix}-card-border-width
--#{root-defaults.$prefix}-card-border
```

Card layout properties

```jsx
--#{root-defaults.$prefix}-card-content-ratio
--#{root-defaults.$prefix}-card-image-ratio
--#{root-defaults.$prefix}-horizontal-card-content-ratio
--#{root-defaults.$prefix}-horizontal-card-image-ratio
```

Card Image Properties

```jsx
--#{root-defaults.$prefix}-card-image-padding-x
--#{root-defaults.$prefix}-card-image-padding-y
--#{root-defaults.$prefix}-card-image-padding
```

Card content properties

```jsx
--#{root-defaults.$prefix}-card-content-padding-x
--#{root-defaults.$prefix}-card-content-padding-y
--#{root-defaults.$prefix}-card-content-padding
```

Card content gap properties

```jsx
--#{root-defaults.$prefix}-card-content-column-gap
--#{root-defaults.$prefix}-card-content-row-gap
--#{root-defaults.$prefix}-card-content-gap
```

Card title properties

```jsx
--#{root-defaults.$prefix}-card-title-color
--#{root-defaults.$prefix}-card-title-font-size
--#{root-defaults.$prefix}-card-title-font-weight
--#{root-defaults.$prefix}-card-title-font-family
--#{root-defaults.$prefix}-card-title-line-height
```

Markup

```jsx
    <div class="py-10 full-width container">
      <h2>Cards</h2>
      <p>Cards using the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.top</span> class will have the image placed on the top while cards using the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.bottom</span> class will have the image placed on the bottom.</p>
      <div class="columns">
        <div class="card">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card bottom">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 full-width container">
      <h2>Horizontal Cards</h2>
      <p>Cards using the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.right</span> class will have the image placed on the right while cards using the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.left</span> class will have the image placed on the left.</p>
      <div class="columns count-2">
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal right">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 full-width container">
      <h2>Inverse Cards</h2>
      <p>Cards using the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.inverse</span> class will have the image placed on the right if it is a horizontal card and on the bottom if it is a vertical card.</p>
      <p>This is mainly to provide a shortcut for horiztonal cards that you'd like to use the <span class="display-inline-block text-tertiary-800 bg-secondary-100 px-1">.bottom .right</span> classes on when the card is forced to be vertical.</p>
      <div class="columns count-2">
        <div class="card horizontal inverse">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
        <div class="card horizontal inverse">
          <div class="card-image">
            <img src="https://unsplash.it/1000/400" alt="Card image">
          </div>
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body">
              <p>This is some text that describes the card.</p>
            </div>
            <div class="card-footer">
              <a class="button primary stretched" href="#">Card Action</a>
            </div>
          </div>
        </div>
      </div>
    </div>
```
