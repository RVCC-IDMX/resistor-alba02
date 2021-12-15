import { getResistorOhms } from './resistor.js';


//query selectors for band colors + answer  
const answer = document.querySelector('.answer');
const color0 = document.querySelector('#color0');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');


// object for bands colors;
const bands = {
    color1:'red',
    color2:'green',
    multiplier:'violet',
    tolerance:'gold'
}



//query selector for the 4 bands;
const b0 = document.querySelector('#b0');
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')

let color;
//event listeners for color 0

color0.addEventListener('click', function(e){
 color = e.target.className.replace('box ', '');
b0.className = `band ${color}`;
bands.color1 = color;
answer.innerText= getResistorOhms(bands);
})

//color 1

color1.addEventListener('click', function(e){
    color = e.target.className.replace('box ', '');
   b1.className = `band ${color}`;
   bands.color2 = color;
   answer.innerText= getResistorOhms(bands);
   })
//color2
   color2.addEventListener('click', function(e){
    color = e.target.className.replace('box ', '');
   b2.className = `band ${color}`;
   bands.multiplier = color;
   answer.innerText= getResistorOhms(bands);
   })
//color 3
   color3.addEventListener('click', function(e){
    e.target.className.replace('box ', '');
   b3.className = `band ${color}`;
   bands.tolerance = color;
   answer.innerText= getResistorOhms(bands);
   })
