//clock script from https://www.ricocheting.com/code/javascript/html-generator/date-time-clock
var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

//add controls to set the amt of hrs? creates new blank divs

GetClock();
setInterval(GetClock,1000);

//take time from GetClock
//use it to assign divs classes for colors

//variables for each button
var toDo8 = document.querySelector("#toDo8");
var notePad8 = document.querySelector(".notePad8");
var saveBtn8 = document.querySelector(".save8");

var toDo9 = document.querySelector("#toDo9");
var notePad9 = document.querySelector(".notePad9");
var saveBtn9 = document.querySelector(".save9");

var toDo10 = document.querySelector("#toDo10");
var notePad10 = document.querySelector(".notePad10");
var saveBtn10 = document.querySelector(".save10");

var toDo11 = document.querySelector("#toDo11");
var notePad11 = document.querySelector(".notePad11");
var saveBtn11 = document.querySelector(".save11");

var toDo12 = document.querySelector("#toDo12");
var notePad12 = document.querySelector(".notePad12");
var saveBtn12 = document.querySelector(".save12");

var toDo1 = document.querySelector("#toDo1");
var notePad1 = document.querySelector(".notePad1");
var saveBtn1 = document.querySelector(".save1");

var toDo2 = document.querySelector("#toDo2");
var notePad2 = document.querySelector(".notePad2");
var saveBtn2 = document.querySelector(".save2");

var toDo2 = document.querySelector("#toDo2");
var notePad2 = document.querySelector(".notePad2");
var saveBtn2 = document.querySelector(".save2");

var toDo3 = document.querySelector("#toDo3");
var notePad3 = document.querySelector(".notePad3");
var saveBtn3 = document.querySelector(".save3");

var toDo4 = document.querySelector("#toDo4");
var notePad4= document.querySelector(".notePad4");
var saveBtn4 = document.querySelector(".save4");

renderLastNote();
//function that produces notes previously saved upon loading the page
function renderLastNote() {
    var note = localStorage.getItem("#toDo8");
    notePad8.textContent = note;

    var note = localStorage.getItem("#toDo9");
    notePad9.textContent = note;

    var note = localStorage.getItem("#toDo10");
    notePad10.textContent = note;

    var note = localStorage.getItem("#toDo11");
    notePad11.textContent = note;

    var note = localStorage.getItem("#toDo12");
    notePad12.textContent = note;

    var note = localStorage.getItem("#toDo1");
    notePad1.textContent = note;

    var note = localStorage.getItem("#toDo2");
    notePad2.textContent = note;

    var note = localStorage.getItem("#toDo3");
    notePad3.textContent = note;

    var note = localStorage.getItem("#toDo4");
    notePad4.textContent = note;
}

//function for each save button to send notes to local storage
saveBtn8.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad8").value;

        localStorage.setItem("#toDo8", note);
        renderLastNote();
    });


saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad9").value;

        localStorage.setItem("#toDo9", note);
        renderLastNote();
    
    });

saveBtn10.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad10").value;

        localStorage.setItem("#toDo10", note);
        renderLastNote();
    });

saveBtn11.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad11").value;

        localStorage.setItem("#toDo11", note);
        renderLastNote();
    });

saveBtn12.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad12").value;

        localStorage.setItem("#toDo12", note);
        renderLastNote();
    });
    
saveBtn1.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad1").value;

        localStorage.setItem("#toDo1", note);
        renderLastNote();
    });

saveBtn2.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad2").value;

        localStorage.setItem("#toDo2", note);
        renderLastNote();
    });

saveBtn3.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad3").value;

        localStorage.setItem("#toDo3", note);
        renderLastNote();
    });

saveBtn4.addEventListener("click", function(event) {
    event.preventDefault();
    
    var note = document.querySelector(".notePad4").value;

        localStorage.setItem("#toDo4", note);
        renderLastNote();
    });