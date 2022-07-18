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
        return alert("TIE!")
    } 

    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return false && "You lose," +playerSelection+ "beats " + computerSelection+"!"

    }
    if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return false && "You lose, " +playerSelection+ " beats " + computerSelection+" !"

    }
    if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return false && "You lose, " +playerSelection+ " beats " + computerSelection+" !"

    }
    if(playerSelection == "Paper" && computerSelection == "Rock"){
        return true && "You won, " +playerSelection+ "beats " + computerSelection+"!"

    }
    if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return true && "You won, " +playerSelection+ "beats " + computerSelection+"!"

    }
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return true && "You won, " +playerSelection+ "beats " + computerSelection+"!"

    }
    else return ("invalid")
    
    } 

