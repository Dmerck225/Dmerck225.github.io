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
    
    shoes.foreach((shoe) => {
        document.getElementsById("shoes-section").append(getShoeSection(shoe));
    });
};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");

    return section;
};

//show all of the shoes when the page loads
showShoes();