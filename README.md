# arouter
### ES6+, Anchor Router
for the people who wants just a little HTML site and a little routing..

its not even worth to use a class, but here it is


# HowTo
```html
<a href="#impressum">Impressum</a>
<a href="#duckduckgo">Duckduckgo</a>
<div id="content"></div>
```
```javascript
let aroute = new ARouter("content", {
        "#impressum": "pages/impressum.html",
        "#duckduckgo": "https://duckduckgo.com/",
        "#": "index.html"
    });
```
