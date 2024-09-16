// count

let counter = 0;

document.getElementById('count').onclick = () => {
    counter++;
    document.getElementById('counter').innerHTML = counter;
};

// Random Image

document.getElementById('random-image').onclick = () => {
    location.reload();
}    

// Slider

const slider = document.getElementById('myRange');
const sliderImg = document.getElementById('slider-img');

slider.oninput = function() {
    const containerWidth = slider.parentElement.offsetWidth; // Get the container's width
    const imgWidth = sliderImg.offsetWidth; // Get the image's width
    const maxMove = containerWidth - imgWidth; // Calculate max movement distance

    // Make sure we start moving left from 0 and not from the middle (50%)
    const moveDistance = (this.value / 100) * maxMove;

    // Update the left position of the image based on the slider's current value
    sliderImg.style.left = `${moveDistance}px`;
};