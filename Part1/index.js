console.log("This is working");

let board = []

let boardFull = true;

function play(clickedId){
   let playerSpan =  document.getElementById('player');
   let clickedElement = document.getElementById(clickedId);

   if (playerSpan.innerText ==='X'){
       playerSpan.innerText = 'O';
       clickedElement.innerText = 'X';
       board[clickedId] = 'X';
   } else {  
       playerSpan.innerText = 'X';
       clickedElement.innerText = 'O';
       board[clickedId] = 'O';
}

//Horizontal check
if(board[0]===board[1]&&board[0]===board[2]&&board[0]!=undefined){alert(`The winner is player ${board[0]}`); };
if(board[3]===board[4]&&board[3]===board[5]&&board[3]!=undefined){alert(`The winner is player ${board[3]}`); };
if(board[6]===board[7]&&board[6]===board[8]&&board[6]!=undefined){alert(`The winner is player ${board[6]}`); };

//Vertical check
if(board[0]===board[3]&&board[0]===board[6]&&board[0]!=undefined){alert(`The winner is player ${board[0]}`); };
if(board[1]===board[4]&&board[1]===board[7]&&board[1]!=undefined){alert(`The winner is player ${board[1]}`); };
if(board[2]===board[5]&&board[2]===board[8]&&board[2]!=undefined){alert(`The winner is player ${board[2]}`); };

//Cross check
if(board[0]===board[4]&&board[0]===board[8]&&board[0]!=undefined){alert(`The winner is player ${board[0]}`); };
if(board[6]===board[4]&&board[6]===board[2]&&board[6]!=undefined){alert(`The winner is player ${board[6]}`); };


console.log(board[3])
for (let i = 0; i < 8; i++){
    if (board[i] != undefined){
        boardFull = false;
    }
}
console.log(boardFull);

if(boardFull){
    alert("No winners! This is a Cat's game!!!")
}


  


}