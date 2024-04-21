import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Secong Number", type: "number", name: "secondNumber" },
  {
    message: "Select One of the Operators to perform action",
    type: "list",
    name: "Operator",
    choices: ["Addition","Substraction","Multiplication","Division"],
  },
]);

// Conditional Statement
if (answer.Operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);   
} else if(answer.Operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.Operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.Operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please Select Valid Operator");
};