// Stars

document.getElementById("star-button").onclick = (e) => {
    const count = document.getElementById("star-input").value;
    const output = document.getElementById("star-output");
    
    document.getElementById("star-error").innerHTML = "";

    if (count == NaN || count < 1) {
        document.getElementById("star-error").innerHTML = "* Invalid";
        return;
    }
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 95}%`;
        star.style.left = `${Math.random() * 95}%`;
        output.append(star);
        const starNumber = i + 1;

        star.onclick = () => {
            const message = document.getElementById("star-message");
            message.innerHTML = `You clicked on star #${starNumber}`;
        };
    };
};
