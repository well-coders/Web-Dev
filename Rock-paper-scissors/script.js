let choices = ["rock","paper","scissors"];
let userScore = 0;
let compScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");
let userScoreVal = document.querySelector(".userScore");
let compScoreVal = document.querySelector(".compScore");
let userChoiceDisplay = document.querySelector(".userChoiceValue");
let compChoiceDisplay = document.querySelector(".compChoiceValue");

let userChoice = null;
let computerChoice = null;
rock.addEventListener("click",() => {
    userChoice = "rock";
    computerChoice = choices[Math.floor(Math.random() * (3 - 0)) + 0];
    userChoiceDisplay.innerText = userChoice;
    compChoiceDisplay.innerText = computerChoice;
     if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result.style.color = "green";
        result.innerText = "You Win";
        userScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else if((userChoice === "scissors" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors")){
        result.style.color = "red";
        result.innerText = "You loose";
        compScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else {
        result.innerText = "Tie"
        result.style.color = "black";
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    }
})

paper.addEventListener("click",() => {
    userChoice = "paper";
    computerChoice = choices[Math.floor(Math.random() * (3 - 0)) + 0];
    userChoiceDisplay.innerText = userChoice;
    compChoiceDisplay.innerText = computerChoice;
     if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result.style.color = "green";
        result.innerText = "You Win";
        userScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else if((userChoice === "scissors" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors")){
        result.style.color = "red";
        result.innerText = "You loose";
        compScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else {
        result.innerText = "Tie"
        result.style.color = "black";
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    }
    
})

scissors.addEventListener("click",() => {
    userChoice = "scissors";
    computerChoice = choices[Math.floor(Math.random() * (3 - 0)) + 0];
    userChoiceDisplay.innerText = userChoice;
    compChoiceDisplay.innerText = computerChoice;
     if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result.style.color = "green";
        result.innerText = "You Win";
        userScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else if((userChoice === "scissors" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors")){
        result.style.color = "red";
        result.innerText = "You loose";
        compScore++;
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    } else {
        result.innerText = "Tie"
        result.style.color = "black";
        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    }
    
})