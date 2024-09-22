// Navigation

document.querySelector("#toggle-nav").onclick = () => {
    document.querySelector("#nav-items").classList.toggle("hidden-small");
};

document.querySelector("#toggle-nav-triangle").onclick = () => {
    document.querySelector("#toggle-nav-triangle").classList.toggle("triangle-up");
    document.querySelector("#toggle-nav-triangle").classList.toggle("triangle-down");
}

// Swtitching between excersises

document.getElementById("exercise1").onclick = (event) => {
    event.preventDefault();
    document.getElementById("color-slider").classList.remove("hidden");
    document.getElementById("pic-chooser").classList.add("hidden");
    document.getElementById("color-content").classList.remove("hidden");
    document.getElementById("pic-content").classList.add("hidden");
};

document.getElementById("exercise2").onclick = (event) => {
    event.preventDefault();
    document.getElementById("color-slider").classList.add("hidden");
    document.getElementById("pic-chooser").classList.remove("hidden");
    document.getElementById("color-content").classList.add("hidden");
    document.getElementById("pic-content").classList.remove("hidden");
};

// Color Slider

document.querySelector("#myRange").onchange = (r) => {
    const g = 0;
    const b = 0;
    
    document.querySelector("#color-slider").style.setProperty("background", "rgb(" + r.target.value + ", " + g + ", " + b + ")"); 

    if (r.target.value > 0 && r.target.value < 85) {
        document.getElementById("color-text").innerHTML = "Dark";
    } else if (r.target.value > 84 && r.target.value < 170) {
        document.getElementById("color-text").innerHTML = "Medium";
    } else if (r.target.value > 169 && r.target.value < 256) {
        document.getElementById("color-text").innerHTML = "Light";
    }
};

// Picture Chooser

document.getElementById("buttons").onclick = (e) => {
    if (e.target.tagName === "BUTTON") {
        let size;
        switch (e.target.innerHTML.toLowerCase()) {
            case "small":
                size = 50;
                break;
            case "medium":
                size = 150;
                break;
            case "large":
                size = 300;
                break;
        }
        if (size) {
            document.getElementById("main-pic-container").innerHTML = `<img src='https://picsum.photos/${size}' alt='Random Image'>`;
        }
    }
};
