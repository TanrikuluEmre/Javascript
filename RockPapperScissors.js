let playgame = confirm("Let's play rock,papper,scissors game ha ?");
function playinggame()
{
    
    if(playgame)
    {
        let playerChoice = prompt("Okey Rock , Papper or Scissors ?");
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
            if(playerChoice==ComputerChoice)
            {
                alert("Equal")
            }else if(playerChoice=="rock" && ComputerChoice=="papper")
            {
                alert("You Lost Computer Choice is "+ComputerChoice)
            }else if(playerChoice=="rock" && ComputerChoice=="scissors")
            {
                alert("You Won Computer Choice is "+ComputerChoice)
            }else if(playerChoice=="papper" && ComputerChoice=="rock")
            {
                alert("You Won Computer Choice is "+ComputerChoice)
            }else if(playerChoice=="papper" && ComputerChoice=="scissors")
            {
                alert("You Lost Computer Choice is "+ComputerChoice)
            }else if(playerChoice=="scissors" && ComputerChoice=="papper")
            {
                alert("You Won Computer Choice is "+ComputerChoice)
            }else if(playerChoice=="scissors" && ComputerChoice=="rock")
            {
                alert("You Lost Computer Choice is "+ComputerChoice)
            }
        }else
        {
            alert("Try to use true words pls.");
            playinggame();
        }
        
        }   else
    {
        alert("Okey maybe next time :(");
    }
}

playinggame();
