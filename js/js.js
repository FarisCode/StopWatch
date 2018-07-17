var m="0000";
var i=m[0],j=m[1],k=m[2],l=m[3];
window.setInterval(timer, 1000);

function timer(){
    l++;
    var blah;
    if(l===1){
        ele=document.getElementById("two");
        ele.style.animationName="timers";
        ele=document.getElementById("three");
        ele.style.animationName="timers";
        ele=document.getElementById("four");
        ele.style.animationName="timers";
    }
    if(l===10){
        k++;
        l=0;
        ele=document.getElementById("two");
        ele.style.animationName="timer";
    }
    if(k===10){
        j++;
        k=0;
        ele=document.getElementById("three");
        ele.style.animationName="timer";
    }
    if(j===10){
        i++;
        j=0;
        ele=document.getElementById("four");
        ele.style.animationName="timer";
    }
    if(i===10){
        i=0;
        j=0;
        k=0;
        l=0;
    }
    document.getElementById("ths").innerHTML = i;
    document.getElementById("huns").innerHTML = j;
    document.getElementById("tens").innerHTML = k;
    document.getElementById("ones").innerHTML = l;
}

document.getElementById("one").style.animationName="timer";