# Dynamic Background color using pure javascript 

This is a funny little project, which will help you to practice some javascript with fun. Things I have covered in this lesson     

## Math object 

Math object is a collections of `properties` and `method` to perform mathematical calculation.

~~~js
// for getting pi value
Math.PI

// for getting ceil value
Math.ceil(2.33);

//for getting floor value
Math.floor(2.33);

//for getting round value
Math.round(2.33);
Math.round(2.63);
//for getting random number between 0 - 1;
Math.random()

//for getting random number between 0 - 5;
Math.random() * 5

//for getting random integer number between 0 - 5;
Math.floor(Math.random() * 5)

//for getting random integer number between 0 - 5 using pareInt function
// I mean instead of Math.floor() method we can use parseInt function 
parseInt(Math.random() * 5)
~~~

## style in js
using `element.style` object we can style our html document in javascript. In css, we are using `background-color` as css property. But in js `hyphen (-)` treated as `arithmetic operator`. So instead of `background-color` we will use cameCase version 'backgroundColor'. Same goes to similar css properties like `fontFamily`     

~~~php
body.style.backgroundColor = colors[ parseInt(Math.random() * colors.length) ];
body.style.color = 'white';
~~~

## addEventListener

using `addEventListener` we can attach any event to a element

~~~php
button.addEventListener('click', function () {
  // whatever you want to execute on click event
});
~~~
Here first parameter is event name, second parameter is a function   

## How to make a dynamic  colors    

we will make array of colors and make background color from colors array using js. We will select random color from colors array using Math.random() and parseInt() method. Here is the full code   

~~~js
var body = document.body;
var button = document.querySelector('button');
var colors = ['teal', 'salmon', 'tomato', 'blue', 'green', 'maroon', 'dodgerblue'];

function color_change() {
  body.style.backgroundColor = colors[ parseInt(Math.random() * colors.length) ];
}
color_change();

button.addEventListener('click', color_change);
body.style.color = 'white';
~~~
           
         
My name is shibu deb polo        
Thanks         
Please subscribe to my channel https://www.youtube.com/c/polodev10        
Happy coding!      





