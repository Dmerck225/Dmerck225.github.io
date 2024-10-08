class Bird {
    constructor(name, image, habitat, diet, lifespan, description) {
        this.name = name;
        this.image = image;
        this.habitat = habitat;
        this.diet = diet;
        this.lifespan = lifespan;
        this.description = description;
    }

    getSection = () => `
        <div class="bird-box" onclick="showModal('${this.name}')">
            <img src="images/${this.image}" alt="${this.name}" class="bird-img">
            <h3>${this.name}</h3>
        </div>
    `;

    getExpandedSection = () => `
        <div>
            <img src="images/${this.image}" alt="${this.name}" class="bird-img">
            <h2>${this.name}</h2>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Diet:</strong> ${this.diet}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan}</p>
            <p><strong>Description:</strong> ${this.description}</p>
        </div>
    `;
}

// Array to hold bird objects
const birds = [
    new Bird('Hummingbird', 'hummingbird.jpg', 'Gardens', 'Nectar', '5 years', 'Tiny, fast-flying birds that hover in place.'),
    new Bird('Blue Jay', 'bluejay.jpeg', 'Forests', 'Omnivore', '7 years', 'Known for intelligence and social systems.'),
    new Bird('Cardinal', 'cardinal.jpeg', 'Woodlands', 'Herbivore', '3 years', 'Known for bright red plumage and song.'),
    new Bird('Robin', 'robin.jpeg', 'Forests', 'Omnivore', '2 years', 'A small bird, common in gardens and woodlands.')
];

// Loop through the array and add bird sections to the DOM
const birdGallery = document.getElementById('bird-gallery');
birds.forEach(bird => {
    birdGallery.innerHTML += bird.getSection();
});

// Arrow function to display modal dialog with expanded information
const showModal = birdName => {
    const bird = birds.find(b => b.name === birdName);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = bird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
};
