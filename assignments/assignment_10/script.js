getIce = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

showIce = async() => {
    const ice = await getIce();

    ice.forEach((ice) => {
        document.getElementById("main-content").append(getIceSection(ice));
    });
};

getIceSection = (ice) => {
    const section = document.createElement("section");
    section.classList.add("section");

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${ice.image}`;
    section.append(img);

    const sectionTitle = document.createElement("section");
    sectionTitle.classList.add("section-title");
    sectionTitle.innerHTML = ice.name;
    section.append(sectionTitle);

    return section;
};

showIce();