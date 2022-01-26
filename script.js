// function hidden(a){
//   if (a == 1) {
//     document.getElementsByName("startBtn")[0].style.visibility = "hidden";
//   }
//   else if (a == 2) {
//   document.getElementsByName("startBtn")[0].style.visibility = "visible";
//   }
// }


// function myFunction() {

//   var person = prompt("Please enter your name");
//   document.getElementById("p1").innerHTML = "hello " + person + "! this website is all about traveling around the world so even while covid 19 is here you will still be able to find cool places to visit for the future. press start to choose where to go";
//   document.getElementsByName("startBtn")[0].style.visibility = "visible";
//   // <button onclick="myFunction1()">Click me</button>
// }

function myFunction() {

  var person =  document.getElementById("p1").innerHTML = "hello! this website is all about traveling around the world so even while covid 19 is here you will still be able to find cool places to visit for the future. press start to choose where to go";
  document.getElementsByName("startBtn")[0].style.visibility = "visible";
  // <button onclick="myFunction1()">Click me</button>
}


function myFunction1() {
  location.replace("continents.html");
}

function europe1() {
  location.replace("europe.html");
}

function restaurant_eu() {
  location.replace("restaurants_eu.html");
}

function na() {
  location.replace("NA.html");
}

function hotels_eu() {
  location.replace("hotels_eu.html");
}

function museums_eu() {
  location.replace("museums_eu.html");
}

function restaurant_NA() {
  location.replace("restaurants_NA.html");
}





document.getElementsByName("startBtn")[0].style.visibility = "hidden";
myFunction();

// put myFunction in a start function which will have a start button

// <button name="btnValidateWork">my button?</button>
