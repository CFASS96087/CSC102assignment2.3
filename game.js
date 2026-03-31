function RLGL()
{

    // This is code to generate a random whole number between 1 and three for 2 players.  Any decimal will be rounded up to the next whole number.
    var player1 = Math.ceil(Math.random() *3);
    var player2 = Math.ceil(Math.random() *3);

    // These are variables that is memory set aside to store values such as the images for the game in this instance.  The "green.jpg" is a string which represents the file stored on the computer.
    var greenImage = "green.jpg";
    var yellowImage = "yellow.jpg";
    var redImage =  "red.jpg";

    // This command is to reset a specific element on this page such as changing the element in the player boxes on what the result is each time the user presses the button.
    document.getElementById("result").innerHTML = " ";

    if (player1 == 1)
    {
        // If Player 1 result of the math command is 1, the green stoplight image will be presented in Player 1 image box.
        document.getElementById("player1Image").src = greenImage;
    }
    else if (player1 ==2)
    {
        // If Player 1 result of the math command is 2, the yellow stoplight image will be presented in Player 1 image box.
        document.getElementById("player1Image").src = yellowImage;
    }
    else
    {
        // If Player 1 result of the math command is 3, the red stoplight image will be presented in Player 1 image box.
        document.getElementById("player1Image").src = redImage;
    }
     if (player2 == 1)
    {
        // If Player 2 result of the math command is 1, the green stoplight image will be presented in Player 2 image box.
        document.getElementById("player2Image").src = greenImage;
    }
    else if (player2 ==2)
    {
        // If Player 2 result of the math command is 2, the yellow stoplight image will be presented in Player 2 image box.
        document.getElementById("player2Image").src = yellowImage;
    }
    else
    {
       // If Player 2 result of the math command is 3, the red stoplight image will be presented in Player 2 image box.
       document.getElementById("player2Image").src = redImage;
    }

    if (player1 == player2)
    {
        // If Player 1 result of the math command and Player is equal, a DRAW result will appear for the user.
        document.getElementById("result").innerHTML = "DRAW";
    }

    else if (player1 ==1 && (player2 ==2 || (player2 ==3)) || (player1 ==2 && player2 ==3))
    {
        //If Player 1 result is 1 and the Player 2 result is a 2 or 3 Player 1 wins.  If Player 1 result is 2 and Player 2 result is 3, Player 1 wins.
        document.getElementById("result").innerHTML = "Player 1 WINS!!";
    }
    else
    {
        // If Player 2 result is anything other than outlined above, Player 1 loses and Player 2 wins.
        document.getElementById("result").innerHTML = "Player 2 is the WINNER!";
    }
    }
