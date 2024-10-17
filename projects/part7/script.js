// Navigation

document.querySelector("#toggle-nav").onclick = () => {
    document.querySelector("#nav-items").classList.toggle("hidden-small");
};

document.querySelector("#toggle-nav-triangle").onclick = () => {
    document.querySelector("#toggle-nav-triangle").classList.toggle("triangle-up");
    document.querySelector("#toggle-nav-triangle").classList.toggle("triangle-down");
}

// json parsing

getCards = async () => {
    const url = "https://dmerck225.github.io/json/cards.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

showCards = async () => {
    const data = await getCards();
    const cards = data.cards;

    cards.forEach((card) => {
        document.getElementById("library-container").append(getCardSection(card));
    }); 
};

const getCardSection = (card) => {
    const container = document.createElement("div");
    container.classList.add("card-container");
    container.classList.add(card.rarity.toLowerCase());
    document.getElementById("library-container").append(container);

    const content = document.createElement("div");
    content.classList.add("card-content");
    container.append(content);

    const title = document.createElement("div");
    title.classList.add("card-title");
    content.append(title);

    const h1 = document.createElement("h1");
    h1.innerHTML = card.name;
    title.append(h1);

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    content.append(cardImg);

    const img = document.createElement("img");
    img.src = card.img_name;
    cardImg.append(img);

    const cardRarity = document.createElement("div");
    cardRarity.classList.add("card-rarity");
    cardRarity.classList.add(card.rarity.toLowerCase());
    content.append(cardRarity);

    const rarity = document.createElement("p");
    rarity.innerHTML = card.rarity;
    cardRarity.append(rarity);

    const cardMoves = document.createElement("div");
    cardMoves.classList.add("card-moves");
    content.append(cardMoves);
    
    card.abilities.forEach((move) => {
        const ability = document.createElement("p");
        ability.innerHTML = move;
        cardMoves.append(ability); 
    });


    return container;
}

showCards();

// forms

const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST", // get = in url(reproducable), post = sent to server secretly
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if(httpResult.status == 200) {
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};
