const images = {
    "images/birthday.jpg": "It's your birthday",
    "images/clown.jpg": "A playful clown",
    "images/rain.jpg": "A rainy day",
    "images/read.jpg": "Reading a book",
    "images/shovel.jpg": "A shovel ready for work",
    "images/work.jpg": "Hard at work"
};

const imagesDiv = document.getElementById("images");
const descriptionDiv = document.getElementById("description");

for (const [src, description] of Object.entries(images)) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = description;
    img.classList.add("image");

    img.addEventListener("click", () => {
        descriptionDiv.innerHTML = `<h3>${description}</h3>`;
    });

    imagesDiv.appendChild(img);
}
