const getBrews = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showBrews = async() => {
    const breweries = await getBrews();

    breweries.forEach((brewery) => {
        document.getElementById("breweries-section").append(getBrewSection(brewery));
    });
};

getBrewSection = (brewery) => {
    const section = document.createElement("section");

    const a = document.createElement("a");
    a.href = brewery.website_url;
    a.innerHTML = "";
    section.append(a);

    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name;
    a.append(h3);

    const p = document.createElement("p");
    p.innerHTML = brewery.brewery_type + " Brewery";
    section.append(p);

    section.classList.add("brewery");

    return section;
}

showBrews();



// section with class name of brewery
// name is going to be and h3 surrounded with anchor tag that points to brewery website
// brewery type 
// imbed a google map and put the location of the brewery in the google map 
// because we have the latitude and longitude we can embed a google map