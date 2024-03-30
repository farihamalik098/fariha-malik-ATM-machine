#! /usr/bin/env node

import inquirer from "inquirer";
 
let myBalance = 15000; //Dollar

let myPin = 23456;
let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            message : "enter your pin",
            type : "number",
        }
    ]
);

// 234567    ===23456 -false
if (pinAnswer.pin === myPin){
    console.log("correct pin code !!!");
    
    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select option",
                type :  "list",
                choices : ["with drawal", "check balance","fastcash"]
                
                
            }
        ]
    );
    console.log(operationAns);
    if (operationAns.operation === "with drawal"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name :"amount",
                    message : "enter your amount",
                    type : "number",
                }
            ]
        );
        if(amountAns.amount> myBalance){
            console.log("Insufficiet balance")
        }
        // =,+=,_=
       else {
        myBalance -=amountAns.amount;
        console.log(`your remaining balance is${myBalance}`)
    }
    }
    else if (operationAns.operation === "check balance"){
        console.log(`your remaining balance is ${myBalance}`)
 }


    else if(operationAns.operation === "fastcash"){
        let fast = await inquirer.prompt(
            [
                {
                    name : "fastcash",
                    message :"select the amount which you withdrawal",
                    type : "list",
                    choices: [1000,2000,5000,7000,10000,12000]
                } 
            ]
        );
        

         
        myBalance -= fast.fastcash;
 console.log(`you have sucess withdrawal is ${fast.fastcash} ${myBalance}`)


    }
    else {

        console.log("Incorrect pin code");
        
        
    }

}