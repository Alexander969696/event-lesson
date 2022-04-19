'use strict'

const text = document.getElementById('text');
const btn = document.getElementById('btn');
const square = document.getElementById('square');

const eBtn = document.getElementById('e_btn');

const inputRange = document.getElementById('range');
const circle = document.getElementById('circle');

//ex.1
const changeBackgound = function () {
    square.style.background = text.value;
}

btn.addEventListener('click', changeBackgound);

//ex.2
eBtn.style.display = 'none';

//ex.3
const changeSize = function () {
    circle.style.width = inputRange.value + "%";
    circle.style.height = inputRange.value + "%";
}

inputRange.addEventListener('input', changeSize);

