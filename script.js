var body = document.body;
var button = document.querySelector('button');
var colors = ['teal', 'salmon', 'tomato', 'blue', 'green', 'maroon', 'dodgerblue'];

function color_change() {
  body.style.backgroundColor = colors[ parseInt(Math.random() * colors.length) ];
}
color_change();

button.addEventListener('click', color_change);

body.style.color = 'white';