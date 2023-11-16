function convert() {
    let name = "Super-";  

    
    const age = parseInt(document.getElementById('age').value);
    const birthMonth = document.getElementById('months').value;
    const favoriteFood = document.getElementById('food').value;


 if (favoriteFood === "pizza") {
        name = name += "Cheesy";
    } else if (favoriteFood === "sushi") {
        name = name += "Fishy";
    } else if (favoriteFood === "hamburger") {
        name = name += "Fatty";
    } else if (favoriteFood === "pasta") {
        name = name += "Wimpy";
    } else if (favoriteFood === "other") {
        name = name += "Stinky";
    } 

    if (age >= 0 && age < 20) {
        name += "Flat";
    } else if (age >= 20 && age < 60) {
        name += "Bat";
    } else if (age >= 60) {
        name += "Fat";
    }

    
    if (birthMonth === "january") {
        name += "Cat";
    } else if (birthMonth === "february") {
        name += "Rat";
    } else if (birthMonth === "march") {
        name += "Hat";
    } else if (birthMonth === "april") {
        name += "Gnat";
    } else if (birthMonth === "may") {
        name += "Scat";
    } else if (birthMonth === "june") {
        name += "Muskrat";
    } else if (birthMonth === "july") {
        name += "Wildcat";
    } else if (birthMonth === "august") {
        name += "Spat";
    } else if (birthMonth === "september") {
        name += "Slat";
    } else if (birthMonth === "october") {
        name += "Gat";
    } else if (birthMonth === "november") {
        name += "AlleyCat";
    } else if (birthMonth === "december") {
        name += "FruitBat";
    } 



    // Display the result
    document.getElementById('converted-result').innerText = "Your superhero name is: " + name;
}

