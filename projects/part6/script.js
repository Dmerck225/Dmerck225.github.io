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