## __position : sticky__

## __Math.max()__

## __Modernizr__

<br>

### [Modernizr site](https://modernizr.com/)

Download → 필요한 css 선택 → Bulid → Copy to Clipboard

<br>

### __CSS__
```css
.fix_motion .sticky_cont {overflow: hidden; position: sticky; position: -webkit-sticky; top:0; left: 0; width: 100%; height: 100vh;}
.no-csspositionsticky .fix_motion .sticky_cont {position: relative}
```
### __JS__
```js
;(function(window, document, undefined){
    .
    .
    .
})(window, document);
```
```js
if(Modernizr.csspositionsticky) {
    init();
};
```