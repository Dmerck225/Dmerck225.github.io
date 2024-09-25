document.getElementById("btn-loop") .onclick = () => {
    const ul = document.getElementById("numbers");

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.append(li);
        li.setAttribute("id", `li-${i}`);

        li.onclick = () => {
            console.log(`clicked on ${i}`);
        };
    }
};



// attach event after it is created
// for loop make div relative and stars absolute. manipulate the top and left position. also make 
// sure to reference where you got the star from.