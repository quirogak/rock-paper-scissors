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
   
   console.log(computerSelection);
   console.log(playerSelection);
   console.log(playRound(playerSelection, computerSelection));




function playRound(playerSelection, computerSelection){

    
    if (playerSelection == computerSelection){
        return 3 && "TIE!" ;
    } 

    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return 1 && "You lose, " +playerSelection+ " beats " + computerSelection+" !" ;

    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return 1 && "You lose, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return 1 && "You lose, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return 2 && "You won, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return 2 && "You won, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return 2 && "You won, " +playerSelection+ " beats " + computerSelection+" !";

    }
    else return ("invalid")
    
    } 

