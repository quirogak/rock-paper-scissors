const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const currentRoundScore = document.querySelector("#roundScore")
const currentUserScore = document.querySelector("#userScore")
const currentComputerScore = document.querySelector("#computerScore")
const finalResult = document.querySelector("#finalResult")






function getComputerChoice(){

    const options =["Rock", "Paper","Scissors"]

    const random = options[Math.floor(Math.random() * options.length)];
    
    return random;
    }



/*
function getUserChoice(){

    let userChoice = prompt("enter a ")

   let firstLetter = userChoice.charAt(0).toUpperCase();

   let restText = userChoice.slice(1).toLowerCase();

   let fullText = firstLetter + restText; 

   if (fullText != "Rock" && fullText != "Paper" && fullText != "Scissors" ){
    return undefined

 } else {
    return fullText;
}

   }
*/

function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
        return "TIE!";
    } 

    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return ++computerScore && ("You lose this round, "+ computerSelection+ " beats " +playerSelection+" !") ;

    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return ++computerScore && ("You lose this round, " + computerSelection+ " beats " +playerSelection+" !" );

    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return ++computerScore && ("You lose this round, "+ computerSelection+ " beats " +playerSelection+" !") ; 

    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return ++userScore && ("You won this round, " +playerSelection+ " beats " + computerSelection+" !");

    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return ++userScore && ("You won this round, " +playerSelection+ " beats " + computerSelection+" !");

    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return ++userScore && ("You won this round, " +playerSelection+ " beats " + computerSelection+" !");

    }
    else if(playerSelection == undefined){
        return ++computerScore && ("Invalid input, you lose this round.");

    }
   
}




const chooseRock = function(){

    playerSelection = "Rock"
    computerSelection = getComputerChoice()
    console.log(userScore)
    console.log(computerScore)
    console.log(playRound(playerSelection,computerSelection))


currentUserScore.textContent = "User score : " + userScore; 
currentComputerScore.textContent = "Computer score : " + computerScore;
    
    
    if (userScore + computerScore == 5 )   {
    console.log(playGame(playRound))

    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true

    }
}

const choosePaper = function(){

    playerSelection = "Paper"
    computerSelection = getComputerChoice()
    console.log(userScore)
    console.log(computerScore)
    console.log(playRound(playerSelection,computerSelection))
    
currentUserScore.textContent = "User score : " + userScore; 
currentComputerScore.textContent = "Computer score : " + computerScore;
    
    if (userScore + computerScore == 5 )   {
      console.log(playGame(playRound))
    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true

        }
    }


const chooseScissors = function(){
    
    playerSelection = "Scissors"
    computerSelection = getComputerChoice()
    console.log(userScore)
    console.log(computerScore)
    console.log(playRound(playerSelection,computerSelection))
    
currentUserScore.textContent = "User score : " + userScore; 
currentComputerScore.textContent = "Computer score : " + computerScore;
    
    if (userScore + computerScore == 5 )   {

    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
        
        console.log(playGame(playRound))
    
        }
}


rockButton.addEventListener('click',(chooseRock)) 

       
paperButton.addEventListener('click',(choosePaper)) 
           
       
scissorsButton.addEventListener('click',(chooseScissors)) 



let userScore = 0;
let computerScore = 0;


function playGame() {
    
    for (let i = 0; i < 5; i++) {


         if ((i == 4 && (userScore > computerScore) )){
            console.log(userScore);
            console.log(computerScore);
    finalResult.textContent = "You won the game!";
          console.log("You won the game!")
          break

        }
        else if ((i == 4 && (computerScore > userScore) )){
            console.log(userScore);
            console.log(computerScore);
            finalResult.textContent = "You lost the game!";
            console.log("You lost the game!")
            break
  
        }

        else if ((i == 4 && (userScore == computerScore))){
            console.log(userScore);
            console.log(computerScore);
            finalResult.textContent = "The game ends up tied!";
        console.log("The game ends up tied!");
        break
        }
        


      }
      
      return "Game over"
      
         
        }

    

    