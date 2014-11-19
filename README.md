# Library to generate SVG sparklines

[Demo](http://alligatr.co.uk/sparklines/)

## Usage

``` html
<script src="sparklines.js"></script>
<span class="sparkline" data-values="1,4,3,6,5"></span>
<span class="sparkline sparkline-filled" data-values="1,4,3,6,5"></span>
```

Anything with the sparkline class will get an SVG sparkline made from the values in data-values appended. Add the class sparkline‑filled for a filled sparkline like above.

It's not a bad idea to add style too:

``` css
.sparkline svg {
  stroke: mediumseagreen;
  stroke-width: 1.5px;
}
.sparkline-filled svg {
  fill: rgba(60,179,113,0.25);
}
```
