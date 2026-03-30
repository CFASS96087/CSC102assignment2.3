function RLGL()
{
    var player1 = Math.ceil(Math.random() *3);
    var player2 = Math.ceil(Math.random() *3);

    var greenImage = "green";
    var yellowImage = "yellow";
    var redImage =  "red";

    document.getElementById("result").innerHTML = " ";

    if (player1 == 1)
    {
        document.getElementById("player1image").src = greenImage;
    }
    else if (player1 ==2)
    {
        document.getElementById("player1image").src = yellowImage;
    }
    else
    {
        document.getElementById("player1image").src = redImage;
    }
     if (player2 == 1)
    {
        document.getElementById("player2image").src = greenkImage;
    }
    else if (player2 ==2)
    {
        document.getElementById("player2image").src = yellowImage;
    }
    else
    {
        document.getElementById("player2image").src = redImage;
    }

    if (player1 == player2)
    {
        document.getElementById("result").innerHTML = "DRAW";
    }

    else if ((player1 ==1 && player2 ==3 || (player1 ==2 && player2 ==1) || (player1 ==3 && player2 ==2)))
    {
        document.getElementById("result").innerHTML = "player 1 wins!!";
    }
    else
    {
        document.getElementById("result").innerHTML = "player 2 is the winner!";
    }
    }
