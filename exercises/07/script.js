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

// Show color message 

document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if (color == "red") {
        mood = "angry";
    }
    else if (color == "blue") {
        mood = "sad";
    }    
    else {
        mood = "undefined";
    }

    messageP.innerHTML = `You chose ${color} so you are ${mood}`;
};    

// Donations 
/* Get the number
- id it is not a number or it is negative, show and error
- Otherwise first show the perccent out of 10000 twords the goal
- next show a vidual representation with a box and a gradient */

document.getElementById("btn-donate").onClick = () => {
    console.log("Donate");
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if (isNaN(donation) || donation < 0) {
        error.innerHTML = "* Invalid";
        return;
    }

    const percent = donation / goal * 100;
    document.querySelector(":root").style.setProperty("--funds", percent + "%");
}