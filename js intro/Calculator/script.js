//string number variable that keeps updating as the user inputs numbers
//until the user inputs an operator
//then if it's not an operator create a new string number variable as the user inputs number
//if equal button is clicked, write stringnumvar operator stringnumvar2 => results 
//then print results on screen


const screen = document.querySelector(".screen");
const button = document.querySelectorAll("button");
const number = document.querySelector(".numbers")
const operator = document.querySelector(".operator");
const result = document.querySelector(".equal");


let stringNum = [];
let i = 0;
let operators =[];
let results = 0;
let j = 0;
let ResultDisplayed = false;
let Ans = 0;
button.forEach((button) => button.addEventListener("click", () => {
    // if(button.className === "equal")
    // screen.textContent = '';
    // if(button.textContent !== "=");

    const parentElement = event.target.parentElement;
    if(button.className === "numbers" || button.className === "ans") {
        // Check if the screen is showing results, clear it
        if(ResultDisplayed === true) {
            screen.textContent = '';
            ResultDisplayed = false;
        }    
        if(button.className === "ans")
        stringNum[i] === undefined ? stringNum[i] = Ans : stringNum[i] += Ans;

        stringNum[i] === undefined ? stringNum[i] = button.textContent : stringNum[i] += button.textContent;
        screen.textContent += button.textContent;
    }
    if(button.className === "operators") {
        operators[i++] = button.textContent;
        screen.textContent += button.textContent;
    }
    if(button.className === "equal") {
        operators.forEach(() => {
        results = calc(stringNum[j], stringNum[j+1], operators[j])
        stringNum[j+1] = results;
        j++;
    })
        Ans = results;
        clear();
        screen.textContent = Ans;
        ResultDisplayed = true;
    }
    if(button.className === "allclear") {
        ResultDisplayed = false;
        clear();
    }

}))

function clear() {
    i = 0;
    j = 0;
    stringNum = [];
    operators = [];
    results = 0;
    screen.textContent = "";
}


function calc(a, b, x) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch(x) {
        case '+': return a+b;
        case '-': return a-b;
        case '/': return b !== 0 ? a/b : "Math Error";
        case '*': return a*b;
        case '%': return a%b;
        default: return "Syntax Error";
    }
}