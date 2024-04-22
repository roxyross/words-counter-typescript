#! /usr/bin/env node
import inqurier from 'inquirer'
async function userInput() {
   let userText = await inqurier.prompt([{
    name : 'text',
    type : 'input',
    message: "Please Enter Your Text"
   }]) 
   let phrase = userText.text.replace(/\s/g,'');
   let count = phrase.length;
   console.log(`Total Number Of Letters Are ${count}`)
}
userInput()