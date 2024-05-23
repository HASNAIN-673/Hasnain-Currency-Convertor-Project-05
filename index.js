#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t `Welcome to MUHAMMAD HASNAIN` - Currency Converter\n"));
// Define the list of currencies and thier exchange rates
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, //European Currency(Euro)
    "JYP": 113, //Japenese Currency (Yen)
    "CAD": 1.3, // Canadian Doller
    "AUD": 1.65, // Australian Doller
    "PKR": 278.24, // Pakistan Rupees
    // Add more currency and thier exchange rates here
};
// promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency", // Corrected name
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);