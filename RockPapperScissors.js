let playgame = confirm("Let's play rock,papper,scissors game ha ?");
function playinggame()
{
    
    if(playgame)
    { 
        let playerChoice = prompt("Allright! Rock, Papper or Scissors ?");
        playerChoice = playerChoice.trim().toLocaleLowerCase();
    
        if(playerChoice=="rock"||playerChoice=="papper"||playerChoice== "scissors")
        {
            let number = Math.floor(Math.random()*3)
            let ComputerChoice;
            switch(number){
                case 0: ComputerChoice="rock";break;
                case 1: ComputerChoice="papper";break;
                case 2: ComputerChoice="scissors";break;
            }
            ComputerChoice == playerChoice ? alert("Equal, Nobody Win")
            : ComputerChoice == "rock" && playerChoice == "papper" 
            ? alert("Congratulations You Won\n"+"You : "+playerChoice+"\nComputer : "+ComputerChoice)
            : ComputerChoice == "papper" && playerChoice == "scissors" 
            ? alert("Congratulations You Won\n"+"You : "+playerChoice+"\nComputer : "+ComputerChoice)
            : ComputerChoice == "scissors" && playerChoice == "rock" 
            ? alert("Congratulations You Won\n"+"You : "+playerChoice+"\nComputer : "+ComputerChoice)
            : alert("I'm sorry u LOST\n"+"You : "+playerChoice+"\nComputer : "+ComputerChoice);

        }else
        {
            alert("Try to use true words pls.");
            playinggame();
        }
        
        }  else
    {
        alert("Okey maybe next time :(");
    }
}

playinggame();
