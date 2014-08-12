window.onload = function() { 
  function makeChart(values, height, parent, filled) {
    var width = 80;
    height = height - 2;
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);

    function c(x) {
      var s = height / (max - min);
      return height - (s * (x - min));
    }

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('transform', 'translate(0,1)');

    var offset = Math.round(width/(values.length - 1));
    var path = 'M0 ' + c(values[0]).toFixed(2);
    for (var i = 0; i < values.length; i++) {
      path += ' L ' + (i * offset) + ' ' + (c(values[i]).toFixed(2));
    }

    var pathElm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElm.setAttribute('d', path);
    pathElm.setAttribute('fill', 'none');
    svg.appendChild(pathElm);

    if (filled) {
      path += ' V ' + height;
      path += ' L 0 ' + height + ' Z';
      var e = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      e.setAttribute('d', path);
      e.setAttribute('stroke', 'none');
      svg.appendChild(e);
    }

    parent.appendChild(svg);
  }

  function getDefaultFontSize(pa) {
    pa= pa || document.body;
    var who= document.createElement('div');

    who.style.cssText='display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em';

    who.appendChild(document.createTextNode('M'));
    pa.appendChild(who);
    var fs= [who.offsetWidth, who.offsetHeight];
    pa.removeChild(who);
    return fs;
 }

  var elms = document.querySelectorAll('.sparkline');
  for (var i = 0; i < elms.length; i++) {
    var e = elms[i];
    var values = elms[i].dataset.values.split(',').map(function(d) { return parseFloat(d); });
    var height = getDefaultFontSize(e)[1];
    if (e.classList.contains('sparkline-filled')) {
      makeChart(values, height, e, true);
    } else {
      makeChart(values, height, e, false);
    }
  }
}
