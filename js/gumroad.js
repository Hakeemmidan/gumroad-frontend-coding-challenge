const GUMROAD_PRODUCT_LINK = 'https://gumroad.com/l/';
// get all permalink elements
let grPermaLinks = document.querySelectorAll(`[href^='${GUMROAD_PRODUCT_LINK}']`);

// iterate over target permalinks
for (let i = 0; i < grPermaLinks.length; i++) {
  let permaLink = grPermaLinks[i];
  
  // create div container, button, and button text
  const grDiv = document.createElement('div');
  const grButton = document.createElement('a');
  const grButtonTxt = document.createTextNode('Buy my product')

  // set styling for both, and attributes for button
  grDiv.setAttribute('style', 'width: 80%; min-width: 5rem; text-align: center; margin: 0 auto; min-height: 50rem; min-width: 30rem;')
  grButton.setAttribute('style', 'background-color: white !important; background-image: url("https://gumroad.com/button/button_bar.jpg") !important; background-repeat: repeat-x !important; border-radius: 4px !important; box-shadow: rgba(0, 0, 0, 0.4) 0 0 2px !important; color: #999 !important; display: inline-block !important; font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif !important; font-size: 16px !important; font-style: normal !important; font-weight: 500 !important; line-height: 50px !important; padding: 0 15px !important; text-shadow: none !important; text-decoration: none !important;')
  grButton.setAttribute('href', permaLink.href);
  grButton.classList.add('gumroad-button');

  // insert div after permalink element
  permaLink.parentNode.insertBefore(grDiv, permaLink.nextSibling);
  // append text to button
  grButton.appendChild(grButtonTxt);
  // append button to div
  grDiv.appendChild(grButton);
}

