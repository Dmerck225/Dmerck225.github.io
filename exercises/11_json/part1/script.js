const getShoes = async() => {  // get data
    const url = "https://portiaportia.github.io/json/shoes.json";
    
    try {
        const response = await fetch(url); // wait to get url bc javascript usually doesnt wait
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showShoes = async() => { // then show data
    const shoes = await getShoes();  // wait to get shoes
    
    shoes.forEach((shoe) => {
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    });
};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    const p = document.createElement("p");
    p.innerHTML = shoe.brand;
    section.append(p);

    const ul = document.createElement("ul");
    section.append(ul);

    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });
    
    return section;
};

// shoe.name shoe.brand etc. is just pulling the data from the json file

//show all of the shoes when the page loads
showShoes();