// const doStuff = () => {
//     alert("Hello World");
 // if you want to call more than one time

const myButton = document.getElementById("say-hello");
// myButton.onclick = doStuff;
// only put parenthesis if you want to call the function immediately

// mybutton.onclick = () => {
//     document.getElementById("message").innerHTML = "Hello Everyone";
//     document.getElementById("stuff").classList.add("special");
// }; // if you want to call only once for this context

// document.getElementById("say-goodbye").onclick = () => {
//     document.getElementById("message").innerHTML = "Goodbye everyone";
//     document.getElementById("stuff").classList.remove("special");
// };


// showing data from an input field

// document.getElementById("txt-first-name").onkeyup = () => {
//     const textBox = document.getElementById("txt-first-name");
//     document.getElementById("result").innerHTML = textBox.value;
// };

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
};







// const goodbye = document.getElementById("say-goodbye");

// goodbye.onclick = () => {
//     document.getElementById("message").innerHTML = "Goodbye everyone";
//     document.getElementById("stuff").classList.remove("special");
// };

// const hide = document.getElementById("hide-column");

// hide.onclick = () => {
//     document.getElementById("stuff").classList.add("hide");
// };

// const animate = document.getElementById("animate-column");

// animate.onclick = () => {
//     document.getElementById("stuff").classList.add("animate");
// };