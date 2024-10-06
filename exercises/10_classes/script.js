class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {  //can just to .item to call function
        const section = document.createElement("section");
        section.classList.add("dog");

        //create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        //create image and add to first column
        firstColumn.append(this.picture(this.pic));

        //create info data and add to second column
        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Breed", this.breed));
        secondColumn.append(this.paragraph("Age", this.age));
        secondColumn.append(this.paragraph("Color", this.color));
        secondColumn.append(this.paragraph("Size", this.size));

        //create expand / contract arrow
        const expCon = document.createElement("a");
        expCon.href = "#";
        expCon.innerHTML = "&#x25B6;";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        }

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
//const myDog = new Dog("molly", "pit bull", "brown", 4, "xs", "");

dogs.push(new Dog("Coco", "Yorkie", "black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "pit bull", "white", 3, "large", "pitt-bull.jpg"));

dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
});

