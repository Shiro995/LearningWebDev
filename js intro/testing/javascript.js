

// let x = window.prompt("x?")

// let n = window.prompt("n?")


// function pow(x, n){
//     let m = 1;
//     for(let i=0;i<n;i++) {
//         m *= x;
//     }
//     return m;
// }

// alert(pow(x, n));


let answer = parseInt(prompt("Enter a number: "));

for(let i=1;i<=answer;i++) {
    let x = (i) => {
    if(i%3 ==0 && i%5 !=0)
    return "Fizz";
    if(i%3 != 0 && i%5 ==0)
    return "Buzz";
    if(i%5 == 0 && i%3 == 0)
    return "FizzBuzz"
    return i;
    }
    console.log(x(i))
}
