var config = { fetchInvisibleStyles: true }


//
// Code sample 1

// w3schools.com/xml/dom_nodes_traverse.asp
// w3schools.com/xml/dom_examples.asp

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "books_ns.xml", true);
xhttp.send();

xmlDoc = xml.responseXML, /*

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml"); */

x = xmlDoc.documentElement.childNodes;
for (i = 0; i < x.length ;i++) {

	if()
    txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
    txt += x.item(i).attributes[0].nodeValue +
        " (nodetype: " + x.item(i).attributes[0].nodeType + ")" + "<br>";
}


//
// Code sample 2

// developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
// developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

var styleObj = document.styleSheets[0].cssRules[0].style /*
    CSSStyleDeclaration */

for (var i = styleObj.length; i--;) {
  var nameString = styleObj[i]; 
  styleObj.removeProperty(nameString);
}

let para = document.querySelector('p');
let compStyles = window.getComputedStyle(para);
para.textContent = 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height') +
    '.';

var h3 = document.querySelector('h3');
var result = getComputedStyle(h3, ':after').content;


//
// Example: Button click Ripple effect with a CSS fallback (material-ui)

/* https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/

 - recreate a button from the tutorial: a CSS fallback, JS-overridden
 - using code above, gather a new array of styles applied to button element
 - create a new stylesheet from this array of styles, remove previous stylesheet

 */
