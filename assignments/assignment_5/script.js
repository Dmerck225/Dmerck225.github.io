// count

let counter = 0;

document.getElementById('count').onclick = () => {
    counter++;
    document.getElementById('counter').innerHTML = counter;
};

// Random Image

document.getElementById('random-image').onclick = () => {
    location.reload();
};   

// Slider

const slider = document.getElementById('myRange');
const sliderImg = document.getElementById('slider-img');

 slider.oninput = function() {
    const containerWidth = slider.parentElement.offsetWidth; 
    const imgWidth = sliderImg.offsetWidth; 
    const maxMove = containerWidth - imgWidth; 

    const moveDistance = this.value / 100 * maxMove;
    
    sliderImg.style.left = `${moveDistance}px`;
 };
