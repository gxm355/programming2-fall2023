let money = parseInt(prompt("Enter USD Value"));
let moneySpan = document.getElementById("money");
moneySpan.innerText = money;

let eur = money*0.94
let eurSpan = document.getElementById("eur");
eurSpan.innerText = eur;

let gbp = money*0.82
let gbpSpan = document.getElementById("gbp");
gbpSpan.innerText = gbp;

let cad = money*1.38
let cadSpan = document.getElementById("cad");
cadSpan.innerText = cad;

let chf = money*0.90
let chfSpan = document.getElementById("chf");
chfSpan.innerText = chf;

let jpy = money*151.5
let jpySpan = document.getElementById("jpy");
jpySpan.innerText = jpy;