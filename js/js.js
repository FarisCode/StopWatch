var m = "000000";
var g = m[0], h = m[1], i = m[2], j = m[3], k = m[4], l = m[5];
var flag = 0;
var inter;

function reset() {
    g = m[0];
    h = m[1];
    i = m[2];
    j = m[3];
    k = m[4];
    l = m[5];
    inter;
    post();
    flag = 0;
    window.clearInterval(inter);
    unset("one");
    unset("two");
    unset("three");
    unset("four");
    document.getElementById("start").innerText = "Start";
    document.getElementById("start").style.color = "#3b8e52";
}
function start() {
    if (flag === 0) {
        flag = 1;
        inter = window.setInterval(timer, 1000);
        document.getElementById("one").style.animationName = "timer";
        document.getElementById("start").innerText = "Stop";
        document.getElementById("start").style.color="#ff0000";
    } else {
        unset("one");
        unset("two");
        unset("three");
        unset("four");
        flag = 0;
        window.clearInterval(inter);
        document.getElementById("start").innerText = "Start";
        document.getElementById("start").style.color = "#3b8e52";
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
    if (k === 6) {
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
    if (i === 6) {
        h++;
        i = 0;
    }
    if (h === 10) {
        g++;
        h = 0;
    }
    if (g === 10) {
        g = 0;
        h = 0;
        i = 0;
        j = 0;
        k = 0;
        l = 0;
    }
    post();
}
function post() {
    document.getElementById("mill").innerHTML = g;
    document.getElementById("lac").innerHTML = h;
    document.getElementById("ths").innerHTML = i;
    document.getElementById("huns").innerHTML = j;
    document.getElementById("tens").innerHTML = k;
    document.getElementById("ones").innerHTML = l;
}
function unset(str) {
    document.getElementById(str).style.animationName = "timers";
}

