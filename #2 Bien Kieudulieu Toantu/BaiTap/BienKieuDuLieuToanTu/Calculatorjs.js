let numberFirst = document.getElementById('numberFirst');
let numberSecond = document.getElementById('numberSecond');
let result = document.getElementById('result');
function Addition() {
    result.innerText = numberFirst.value + numberSecond.value
}
function Subtraction() {
    result.innerText = numberFirst.value / numberSecond.value
}
function Multiplication() {
    result.innerText = numberFirst.value * numberSecond.value
}
function Division() {
    result.innerText = numberFirst.value / numberSecond.value
}