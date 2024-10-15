document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing the page....dont go to the action

    const form = e.target;  // the button that triggered the event = e.target

    // looking at array of elements in the form. thats why we use brackets
    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChcecked = form.elements["terms"].checked; // is a boolean thats why we use the .checked property


    // console.log(`${raccoonName} is a ${demeanor} raccoon. ${termsChcecked ? "I agree to the terms and conditions" : "I do not agree to the terms and conditions"}`);
    // cant really use the last part of this consol.log but its just for fun and to learn
};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);  // returns an array of radio buttons with the same name

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
};