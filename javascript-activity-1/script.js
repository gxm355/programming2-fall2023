

// let money = parseInt(prompt("Enter USD Value"));
// let moneySpan = document.getElementById("money");
// moneySpan.innerText = money;

function convert () {

let money = document.getElementById("currency-amount").value;
let currency = document.getElementById("currencies").value;
let convertedResultDiv = document.getElementById("converted-result");

console.log(currency);

if(currency == "eur") {
	let newAmount = money*0.94;
	convertedResultDiv.innerText = newAmount + " EUR";
} 

else if(currency == "gbp") {
	let newAmount = money*0.82;
	convertedResultDiv.innerText = newAmount + " GBP";
}

else if(currency == "cad") {
	let newAmount = money*1.38;
	convertedResultDiv.innerText = newAmount + " CAD";
}

else if(currency == "chf") {
	let newAmount = money*0.90;
	convertedResultDiv.innerText = newAmount + " CHF";
}

else if(currency == "jpy") {
	let newAmount = money*151.5;
	convertedResultDiv.innerText = newAmount + " JPY";
}

else {
	convertedResultDiv.innerText = "Choose a Currency!";
}

// let eur = money*0.94
// let eurSpan = document.getElementById("eur");
// eurSpan.innerText = eur;

// let gbp = money*0.82
// let gbpSpan = document.getElementById("gbp");
// gbpSpan.innerText = gbp;

// let cad = money*1.38
// let cadSpan = document.getElementById("cad");
// cadSpan.innerText = cad;

// let chf = money*0.90
// let chfSpan = document.getElementById("chf");
// chfSpan.innerText = chf;

// let jpy = money*151.5
// let jpySpan = document.getElementById("jpy");
// jpySpan.innerText = jpy;

}