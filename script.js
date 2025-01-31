
function clickFunction(id){
    document.getElementById(id).style.color = "black";
}
function changeColor(id){
    document.getElementById(id).style.color = "black";
}
function darkMode(id){
    document.getElementById('home').style.backgroundColor = "black";
    document.getElementById('about').style.backgroundColor = "black";
    document.getElementById('context').style.backgroundColor = "black";
    document.getElementById('test').style.backgroundColor = "black";
}
function whiteMode(id){
    document.getElementById('home').style.backgroundColor = "white";
    document.getElementById('about').style.backgroundColor = "white";
    document.getElementById('context').style.backgroundColor = "white";
    document.getElementById('test').style.backgroundColor = "white";
    document.getElementsByTagName('p') = "blue";
}
function login(){
    window.location.href="test.html";
}