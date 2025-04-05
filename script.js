// When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

//Get the element with an id of onload
let onLoadEl = document.getElementById("onload");
   
//Add some HTML within the element we grabbed
onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"

})

//Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
directionEl.innerText = `The Key you pressed is ${e.code}`;

});


let clickBtn = document.getElementById("clickMe");

clickBtn.addEventListener('click', function(){
    clickBtn.innerText = "You clicked me!";
})

let newBtn = document.querySelector('#randomColorBtn');

newBtn.addEventListener('click', function(){
    // Adding Math.floor so there are round integers
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    
    let randomColorBackground = `rgb(${red}, ${blue}, ${green})`;

    document.body.style.backgroundColor = randomColorBackground;
});

let otherBtn = document.querySelector('.cool-btn');

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }

let drkBtn = document.getElementById('darkMode');
let bckgrnd = document.body;

drkBtn.addEventListener('click', function(){
    bckgrnd.classList.toggle('darkness');

})