// let age = 17;
// let name="Krish";

// console.log(age);
// console.log(name);

// age = prompt("What is your age: ");
// name = prompt("What is your name: ");

// console.log(age);
// console.log(name);

// alert("This is an alert!");

// const nameParagraph = document.getElementById("name");
// console.log(nameParagraph);
// nameParagraph.innerText = name;
// nameParagraph.style.color = "red";

let place = prompt("Enter a place");
let placeSpan = document.getElementById("place");
placeSpan.innerText = place;

let adjective = prompt("Enter a adjective");
let adjectiveSpan = document.getElementById("adjective");
adjectiveSpan.innerText = adjective;

let animal = prompt("Enter a animal");
let animalSpan = document.getElementsByClassName("animal");
animalSpan[0].innerText = animal;
animalSpan[1].innerText = animal;
animalSpan[2].innerText = animal;
animalSpan[3].innerText = animal;
animalSpan[4].innerText = animal;
animalSpan[5].innerText = animal;

let verb = prompt("Enter a verb");
let verbSpan = document.getElementById("verb");
verbSpan.innerText = verb;

let evilobject = prompt("Enter an evil object");
let evilobjectSpan = document.getElementsByClassName("evilobject");
evilobjectSpan[0].innerText = evilobject;
evilobjectSpan[1].innerText = evilobject;
evilobjectSpan[2].innerText = evilobject;

let weapon = prompt("Enter a weapon");
let weaponSpan = document.getElementById("weapon");
weaponSpan.innerText = weapon;

let food = prompt("Enter a food");
let foodSpan = document.getElementById("food");
foodSpan.innerText = food;

let activity = prompt("Enter a activity");
let activitySpan = document.getElementById("activity");
activitySpan.innerText = activity;