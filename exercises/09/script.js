
document.getElementById("btn-loop").onclick = () => {
    const startNum = document.getElementById("txt-fist-num").value;
    const endNum = document.getElementById("txt-second-num").value;
    const ul = document.getElementById("numbers");

    console.log(startNum, endNum);

    if(endNum >= startNum) {
        for (let i = startNum; i <= endNum; i++) {
            ul.append(createLi(i));
        }
    } else {
        for (let i = endNum; i >= startNum; i--) {
            ul.append(createLi(i));
        }
    }
};

const createLi = (num) => {
    const li = document.createElement("li");
    li.innerHTML = num;
    li.setAttribute("id", `li-${num}`);

    li.onclick = () => {
        console.log(`lucky number ${num}`);
    };

    return li;
}

let counter = 0;
let updateCount;

document.getElementById("btn-count").onclick = (e) => {
    const count = document.getElementById("count");

    if(e.target.innerHTML == "Start") {
        e.target.innerHTML = "Stop";
        updateCount = setInterval(()=>{
            counter++;
            count.innerHTML = counter;
        }, 1000);
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }
}

// Learning Arrays

let toys = ["drum", "ball", "rope", "balloon", "tire"]

toys.forEach((toy) => {  //for each item execute a function  // for eventListener the event is the parameter, for forEach the item is the parameter
    const p = document.createElement("p");
    p.innerHTML = toy;
    document.getElementById("list").append(p);
});

// Santas expenses

let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.53;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 5.3;
toyPrices["bike"] = 7.4;

// Accosiative Array

for(let toy in toyPrices) {
    const tr = document.createElement("tr");
    document.getElementById("table").append(tr);
    const td = document.createElement("td");
    td.innerHTML = toy;
    document.getElementById("table").append(td);
}