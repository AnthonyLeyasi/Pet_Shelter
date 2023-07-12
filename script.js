function hide(el) {
    el.remove();
}

var num1 = document.querySelector(".num");
var num2 = document.querySelector(".num2");
var num3 = document.querySelector(".num3");
var num = 3;
var num02 = 3;
var num03 = 3;

function petb() {
    num++;
    num1.innerText = num + " pettings";
}

function petb2() {
    num02++;
    num2.innerText = num02 + " pettings";
}

function petb3() {
    num03++;
    num3.innerText = num03 + " pettings";
}
