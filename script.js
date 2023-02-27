let salute = document.querySelector('p');
let somepart = document.querySelector("main");
let hour = new Date().getHours();
let greeting;
let colour;
if (hour<12) {
    greeting = "Good morning";
    colour = "#4bbdbd";
} else if (hour<17) {
    greeting = "Good afternoon"
    colour = "#bd4b4b";
}else {
    greeting = "Good evening"
    colour = "#abacb8";
}
salute.innerHTML = greeting;
somepart.style.backgroundColor = colour;
