'use strict';

let text = document.getElementById('myP').innerText;
let newText = text.replace(/\B[']/g, '"');
document.getElementById('newText').innerText = newText;
