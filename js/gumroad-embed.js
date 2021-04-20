const GUMROAD_PRODUCT_LINK = 'https://gumroad.com/l/';
// get all permalink elements
let grPermaLinks = document.querySelectorAll(`[href^='${GUMROAD_PRODUCT_LINK}']`);

// iterate over target permalinks
for (let i = 0; i < grPermaLinks.length; i++) {
  let permaLink = grPermaLinks[i];
  
  // create div container and iframe
  let grDiv = document.createElement('div');
  let grIFrame = document.createElement('iframe');

  // set styling for both, and src for iframe
  grDiv.setAttribute('style', 'width: 80%; min-width: 5rem; text-align: center; margin: 0 auto; min-height: 50rem; min-width: 30rem;')
  grIFrame.setAttribute('style', 'min-height: 50rem; min-width: 30rem; border: none;')
  grIFrame.setAttribute('src', permaLink.href);

  // insert div after permalink element
  permaLink.parentNode.insertBefore(grDiv, permaLink.nextSibling);
  // append iframe to div
  grDiv.appendChild(grIFrame);
}
