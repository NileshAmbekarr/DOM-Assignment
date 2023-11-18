let display = document.getElementById("display");
let input = document.getElementById("input");

input.addEventListener("keypress", function(e){
    display.innerText = "YOU have Pressed " + e.key ;
});