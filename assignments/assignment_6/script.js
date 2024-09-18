// Color Slider

document.querySelector("#myRange").onchange = (event) => {
    let r = event;
    const g = 0;
    const b = 0;
    
    document.querySelector("color-slider").style.background = `rgb(${r}, ${g}, ${b})`; 

    
};