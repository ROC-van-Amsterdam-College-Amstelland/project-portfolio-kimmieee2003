function verander1 (){
    document.getElementById("ikzelf2").style.display="none";
    document.getElementById("paard1").style.display="block";

}
function verander2(){
    document.getElementById("paard1").style.display="none";
    document.getElementById("paard2").style.display="block";

}

function verander3(){
    document.getElementById("paard2").style.display="none";
    document.getElementById("ikzelf2").style.display="block";
}

function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
}