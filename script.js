// function onover() {
//     document.getElementById('mth1').style.color = 'Red';
//     alert("Heading is changed to red color")
// }
// function mouseoOut() {
//     document.getElementById('mth1').style.color = 'black';
//     alert("Heading is changed to black color after mouseout")
// }
var a = 50;
var b = 20;
var linebreak = "<br />";
document.write(linebreak);
// document.write("Entering loop" + linebreak);
outerloop:
for (var i = 0; i < 10; i++) {
    // document.write("Outerloop -->" + i + linebreak);
    // document.write(i + linebreak);
    innerloop:
    for (var j = 0; j < 5; j++) {
        //   document.write("innerloop-->" + j + linebreak);
        // document.write(j + linebreak);

        if (j > 1)
            // break;
            continue;
        if (i == 1)
            // break innerloop;
            continue;
        if (i == 1)
            // break outerloop;
            continue;
    }
}
// document.write("exiting loop")
// FUNCTIONS
function foo() {
    var result
    result = name("Raghu");
}

function name(k) {
    alert("Hi " + k)
    document.write(k)
}
var funConst = new Function("a", "b", "return a*b;")
function d() {
    var res;
    result = funConst(5, 5)
    document.write(result);
}
var func = new Function("x", "y", "return x*y;");
function secondFunction() {
    var result;
    result = func(10, 20);
    document.write(result);
}
function foo1() {
    document.write("WELCOME TO JAVASCRIPT")
}
function bgdColor1(){
    document.getElementById('mth1').style.backgroundColor="green";
    alert("Submitted Successfully!!");
}
function bgdColor2(){
    document.getElementById('mth1').style.backgroundColor="red"
}
function bgdColor3(){
    document.getElementById('mth1').style.backgroundColor="white";
    document.getElementById('ntsbt').style.backgroundColor="white"
}
function reset(){
    document.getElementById('fname').value='';
}
function manage(fname) {
    var bt = document.getElementById('btSubmit');
    if (fname.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}
function confirm(fname){
    var bt = document.getElementById('btConft');
    if (fname.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}
// function confMsg(){
//     // document.getElementById('ntsbt').innerHTML="Submitted Successfully!"
// }
function onFunction() {
    alert ("Your browser is working online.");
  }
  
  function offFunction() {
    alert ("Your browser is working offline.");
  }