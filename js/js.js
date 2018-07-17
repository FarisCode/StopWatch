var m = "0000";
var i = m[0], j = m[1], k = m[2], l = m[3];
var flag = 0;
var inter;
function reset() {
    i = m[0];
    j = m[1];
    k = m[2];
    l = m[3];
    inter;
    post();
    flag = 0;
    window.clearInterval(inter);
    unset("one");
    unset("two");
    unset("three");
    unset("four");
}
function start() {
    if (flag === 0) {
        flag = 1;
        inter = window.setInterval(timer, 1000);
        document.getElementById("one").style.animationName = "timer";
    } else {
        unset("one");
        unset("two");
        unset("three");
        unset("four");
        flag = 0;
        window.clearInterval(inter);
    }

}

function timer() {
    l++;
    var ele;
    if (l === 1) {
        unset("two");
        unset("three");
        unset("four");
    }
    if (l === 10) {
        k++;
        l = 0;
        ele = document.getElementById("two");
        ele.style.animationName = "timer";
    }
    if (k === 10) {
        j++;
        k = 0;
        ele = document.getElementById("three");
        ele.style.animationName = "timer";
    }
    if (j === 10) {
        i++;
        j = 0;
        ele = document.getElementById("four");
        ele.style.animationName = "timer";
    }
    if (i === 10) {
        i = 0;
        j = 0;
        k = 0;
        l = 0;
    }
    post();
}
function post() {
    document.getElementById("ths").innerHTML = i;
    document.getElementById("huns").innerHTML = j;
    document.getElementById("tens").innerHTML = k;
    document.getElementById("ones").innerHTML = l;
}
function unset(str) {
    document.getElementById(str).style.animationName = "timers";
}

