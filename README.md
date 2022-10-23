# card-picker
Smooth and pretty slider you can use this package for making your website special.


**card-picker**:
- has NO DEPENDENCIES :)
- is completely free and open source.
- it will reload when the valid attributes change.

<!--

## Table of Contents

- [Demo](#preview)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [License](#license)


# preview
<img src="https://raw.githubusercontent.com/joseph625/card-picker/main/readme.gif" />

> Highly performant, light, and configurable Slider in pure CSS with no dependencies for images, or containers.


## Yet another Lazy Loading JavaScript library, why?

Existing lazy loading libraries hook up to the scroll event or use a periodic timer and call `getBoundingClientRect()` on elements that need to be lazy loaded. This approach, however, is painfully slow as each call to `getBoundingClientRect()` forces the browser to re-layout the entire page and will introduce considerable jank to your website.

Making this more efficient and performant is what [IntersectionObserver](https://developers.google.com/web/updates/2016/04/intersectionobserver) is designed for, and it’s landed in Chrome 51. IntersectionObservers let you know when an observed element enters or exits the browser’s viewport.


## Install

```sh
# You can install lozad with npm
$ npm install --save lozad

# Alternatively you can use Yarn
$ yarn add lozad

# Another option is to use Bower
$ bower install lozad
```

Then with a module bundler like rollup or webpack, use as you would anything else:

```javascript
// using ES6 modules
import lozad from 'lozad'

// using CommonJS modules
var lozad = require('lozad')
```

Or load via **CDN** and include in the `head` tag of your page.

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
```

When loading from CDN, you can find the library on `window.lozad`.

---

<a href="https://www.patreon.com/apoorvsaxena">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

In HTML, add an identifier to the element (default selector identified is `lozad` class):
```html
<img class="lozad" data-src="image.png">
```

All you need to do now is just instantiate Lozad as follows:
```js
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
```
or with a DOM `Element` reference:
```js
const el = document.querySelector('img');
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();
```
or with custom options:
```js
const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1, // ratio of element convergence
    enableAutoReload: true // it will reload the new image when validating attributes changes
});
observer.observe();
```
-->
  
## Browser Support

Available in latest browsers.


## License

[MIT](LICENSE) © [Yousif Jasm](https://www.yousifjasm.me/)
