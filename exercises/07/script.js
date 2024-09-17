// When the hamburger is clicked, toggle between showing and hiding the nav items

// document.getElementById("toggle-nav").onclick = () => {
//     document.getElementById("nav-items").classList.toggle("hidden-small");
// };

document.querySelector("#toggle-nav").onclick = () => {
    document.querySelector("#nav-items").classList.toggle("hidden-small");
};

// Dont go to links destination when clicked

document.querySelector("#click-link").onclick = (event) => {
    event.preventDefault();
    alert("You clicked the link");
};

// change the color of the ball when you pick a color

document.querySelector("#txt-color").onchange = (event) => {
    // document.querySelector("#ball").style.setProperty("background-color", event.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", event.target.value);
};

// make the ball move down

let pos = 0;
document.querySelector("#move-down").onclick = () => {
    pos++;
    document.querySelector("#ball").style.setProperty("top", pos + "px");
}    

// event.target is the element that triggered the event
// event.target.value is the value of the element that triggered the event