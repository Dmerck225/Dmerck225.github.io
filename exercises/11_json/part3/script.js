//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const getCocktails = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showCocktails = async() => {
    const data = await getCocktails();
    const cocktails = data.drinks;

    cocktails.forEach((cocktail) => {
        document.getElementById("cocktails").append(getCocktailSection(cocktail));
    });
};

getCocktailSection = (cocktail) => {
    const div = document.createElement("div");
    div.classList.add("div");
    
    const section = document.createElement("section");
    section.classList.add("section");

    const h2 = document.createElement("h2");
    h2.innerHTML = cocktail.strDrink;
    section.append(h2);

    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;
    section.append(img);

    const h3 = document.createElement("h3");
    h3.innerHTML = "Instructions";
    section.append(h3);
    
    const p = document.createElement("p");
    p.innerHTML = cocktail.strInstructions;
    section.append(p);

    div.append(section);

    const section2 = document.createElement("section");
    section2.classList.add("section-ingredients");
    
    const ingredients = [
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
        cocktail.strIngredient6,
        cocktail.strIngredient7,
        cocktail.strIngredient8,
        cocktail.strIngredient9,
        cocktail.strIngredient10,
        cocktail.strIngredient11,
        cocktail.strIngredient12,
        cocktail.strIngredient13,
        cocktail.strIngredient14,
        cocktail.strIngredient15
    ];

    const measurements = [
        cocktail.strMeasure1,
        cocktail.strMeasure2,
        cocktail.strMeasure3,
        cocktail.strMeasure4,
        cocktail.strMeasure5,
        cocktail.strMeasure6,
        cocktail.strMeasure7,
        cocktail.strMeasure8,
        cocktail.strMeasure9,
        cocktail.strMeasure10,
        cocktail.strMeasure11,
        cocktail.strMeasure12,
        cocktail.strMeasure13,
        cocktail.strMeasure14,
        cocktail.strMeasure15
    ]
    
    for(let i = 1; i <= 15; i++) {

        if (ingredients[i] != null) {
            const p = document.createElement("p");
            p.innerHTML = measurements[i];
            section2.append(p);
        } else {
            p.innerHTML = "";
        }

        const span = document.createElement("span");
        span.innerHTML = "";
        section2.append(span);

        if (measurements[i] != null) {
            const p = document.createElement("p");
            p.innerHTML = ingredients[i];
            section2.append(p);
        } else {
            p.innerHTML = "";
        }
    }

    div.append(section2);

    return div;
}

showCocktails();
