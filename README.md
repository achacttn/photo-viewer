# Photo Viewer App

## Introduction

- A demo application for viewing photos!

- [Click here for link](https://photo-viewer-01.netlify.app/)

## Usage

- Navigation can be done through the header bar.

- Display settings for images can be cycled via button on right hand end of header bar.

- Click any image to bring up full page lightbox for extra details and external link. Click anywhere on lightbox to close.

- Scrolling to bottom of page will trigger more images.

## Notes & Improvements

- Instead of pagination, infinite scrolling is enabled (However, the API has a cap of 30 random images per request, and a rate-limit of 50 calls per hour).

- Performance can be improved by lazy-loading images, and placeholde + transitions while images load.

- Redux/useReducer not used, but if state management gets any more complex, should be implemented.

- Improvements can be made with more error handling and testing.

### Online resources used

- [React docs](https://reactjs.org/docs/hooks-reference.html)

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

- [CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Attributions

- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
