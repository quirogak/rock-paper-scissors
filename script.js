const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")



function getComputerChoice(){
    const options =["Rock", "Paper","Scissors"]

    const random = options[Math.floor(Math.random() * options.length)];
    
    return random;
   
}


/*
function getUserChoice(){

    let userChoice = prompt("enter a pepe")

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
let userScore = 0;
let computerScore = 0;


 rockButton.addEventListener('click',(playerSelection) => {
 playerSelection = "Rock"  
 console.log(playRound(playerSelection,computerSelection))
    
});

paperButton.addEventListener('click',(playerSelection) => {
    playerSelection = "Paper"  
    console.log(playRound(playerSelection,computerSelection))
       
   });

scissorsButton.addEventListener('click',(playerSelection) => {
    playerSelection = "Scissors"  
    console.log(playRound(playerSelection,computerSelection))
       
   });

computerSelection = getComputerChoice();
console.log(computerSelection)


/*

    function playGame(playRound) {
    
    for (let i = 0; i < 5; i++) {

        console.log(userScore);
        console.log(computerScore);
        playerSelection = getUserChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        

         if ((i == 4 && (userScore > computerScore) )){
            console.log(userScore);
            console.log(computerScore);
          console.log("You won the game!")
          break

        }
        else if ((i == 4 && (computerScore > userScore) )){
            console.log(userScore);
            console.log(computerScore);
            console.log("You lost the game!")
            break
  
        }

        else if ((i == 4 && (userScore == computerScore))){
            console.log(userScore);
            console.log(computerScore);
        console.log("The game ends up tied!");
        break
        }
        


      }
      
      return "Game over"
         
        }


        

        console.log(playGame(playRound))

        */