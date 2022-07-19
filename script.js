function getComputerChoice(){
    const options =["Rock", "Paper","Scissors"]

    const random = options[Math.floor(Math.random() * options.length)];
    return random;
  
}

function getUserChoice(){

   let userChoice = prompt("Please select an option between Paper, Rock and Scissors");

   let firstLetter = userChoice.charAt(0).toUpperCase();

   let restText = userChoice.slice(1).toLowerCase();

   let fullText = firstLetter + restText; 

   if (fullText != "Rock" && fullText != "Paper" && fullText != "Scissors" ){
    alert("Please put a correct value")
    return undefined

 } else {
    return fullText;
}

   }

        

   const playerSelection = getUserChoice();
   const computerSelection = getComputerChoice();
   let userScore=(0)
   let computerScore=(0)


function playRound(playerSelection, computerSelection){
 
    

    if (playerSelection == computerSelection){
        return 3 && "TIE!" ;
    } 

    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return computerScore++ && "You lose this round, " +playerSelection+ " beats " + computerSelection+" !" ;

    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return computerScore++ && "You lose this round, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return computerScore++ && "You lose this round, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return userScore++ && "You won this round, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return userScore++ && "You won this round, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return userScore++ && "You won this round, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else return computerScore++ && ("Invalid input, you lose this round.")

    
    
    } 

       


    
     
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(userScore)
        console.log(computerScore)
         getUserChoice();
         getComputerChoice();
         
         if (userScore == 5){
          console.log("You won the game!")

        }
        if (computerScore == 5){
            console.log("You lost the game!")
  
          }

        
         }
    
        
        
    
     
    