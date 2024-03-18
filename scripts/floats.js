import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.3/+esm';

var w = window.innerWidth;
var h = window.innerHeight;

const buttonWindowSize = document.getElementById("size");

buttonWindowSize.onclick(this, () => {
    alert("the size of the window is width: " + w + " and height: " + h)
})