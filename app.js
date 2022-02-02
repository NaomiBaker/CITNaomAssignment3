// asking a question (first number)




let question1 = prompt("Enter a Number");

// let question3 = prompt("Enter another Number");

let result;





if(Number.isNaN(question1)){
    result="Prompt 1 Error: Number was not input."
    document.body.innerHTML= result;
}

let question2 = prompt("Enter an Operator");


let question3 = prompt("Enter another Number");

if(Number.isNaN(question3)){
    result="Prompt 3 Error: Number was not input."
    document.body.innerHTML= result;
}

if (question2 === "+") {
    result = Number(question1) + Number(question3);
} else if (question2 === "-") {
    result = Number(question1) - Number(question3);
} else if (question2 === "*"){
    result = Number(question1) * Number(question3);
} else if (question2 === "/"){
    result = Number(question1) / Number(question3);
} else {
    result = "Prompt 2 Error: Operator was not input."
}

document.body.innerHTML = result;