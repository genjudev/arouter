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
    });
```
