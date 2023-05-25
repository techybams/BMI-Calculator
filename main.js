function reset(){
    document.getElementById("ref").innerHTML = window.location.assign("index.html")
}

function divide(){
    username = document.getElementById("user").value;
    w = document.getElementById("weight").value;
    h = document.getElementById("height").value;
    var m = document.getElementById("flexRadioDefault1").checked;
    var f = document.getElementById("flexRadioDefault2").checked;
    

    bmi = w / h;

    if( m){
        document.getElementById("demo").innerHTML = "Hi "+ username + " Your favourite color is Blue "+ " and your Body Mass Index is " +  bmi.toFixed(2); 
    }
    else if(f){
        document.getElementById("demo").innerHTML = `Hi ${username} Your favourite color is Pink  and your Body Mass Index is ${bmi.toFixed(2)}`;
    }
    // document.getElementById("demo").innerHTML = "Hi "+ username + " and your Body Mass Index is " +  bmi;
}