# Gumroad Frontend Challenge


## To run
1. Download or clone this repo
2. Copy `index.html` absloute path
3. Paste absloute path in browser
4. Comment in/out `<script src="js/gumroad.js"></script>` and `<script src="js/gumroad-embed.js"></script>` respectively to
see how each one behaves
   - Currently, only one appears if both are left in `index.html`, I'm not exactly sure why that happens, to be honest, but I just wanted to let you know that I'm aware of that issue.

## Other notes
For the script links, instead of a relative import, the JS could be hosted, then we can use an absloute import in production (e.g. `src="https://some-hosting-site.com/js/gumroad-embed.js"` or `src="https://some-hosting-site.com/js/gumroad.js"`)