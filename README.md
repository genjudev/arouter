<!-- [START badges] -->

[![Firefox Status](https://img.shields.io/badge/Firefox-61.0.1-green.svg)]() 
[![Chrome Status](https://img.shields.io/badge/Chrome-67.0.3396.99-green.svg)]() 
[![Edge Status](https://img.shields.io/badge/Edge-42.17134.1.0-green.svg)]() 

# arouter
### JavaScript, ES5+, Anchor Router
for the people who wants just a little HTML site and a little routing..

its not even worth to write a function, but here you go..

# HowTo

html
```html
<a href="#impressum">Impressum</a>
<a href="#duckduckgo">Duckduckgo</a>
<div id="content"></div>
```

javascript
```javascript
arouter("content", {
        "#impressum": "pages/impressum.html",
        "#duckduckgo": "https://duckduckgo.com/"
    }, true);
```
Parameter:
1. ID of element to fill
2. anchor url mapping
3. caching
