const numDisplayWrapper = document.querySelector(".countDisplay");
const numCounterDisplay = document.querySelector(".counter");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".subtract");
const numField = document.querySelector(".numInput");

let counter = 0;


//console.log(number);

addButton.addEventListener("click", function(){
    let number = document.querySelector(".numInput").value;
    makeNum = Number(number);
    newNum = makeNum + counter;
    counter = newNum;
    numCounterDisplay.textContent = Number(counter);
    console.log(counter);
    turnRed();
});

subButton.addEventListener("click", function(){
    let number = document.querySelector(".numInput").value;
    makeNum = Number(number);
    newNum = counter - makeNum;
    counter = newNum;
    numCounterDisplay.textContent = Number(counter);
    turnRed();
    // if (counter < 0){
    //     console.log(numCounterDisplay);
    //     numCounterDisplay.style.color = "red";
    // } else {
    //     numCounterDisplay.style.color = "black";
    // }
});

let turnRed = () => {
    if (counter < 0){
        console.log(numCounterDisplay);
        numCounterDisplay.style.color = "red";
    } else if (counter => 0) {
        numCounterDisplay.style.color = "black";
    }
};
