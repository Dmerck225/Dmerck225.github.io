class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }
}

const dogs = [];
//const myDog = new Dog("molly", "pit bull", "brown", 4, "xs", "");

dogs.push(new Dog("Coco", "Yorkie", "black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "pit bull", "white", 3, "large", "pitt-bull.jpg"));

dogs.forEach((dog) => {
    console.log(dog);
});