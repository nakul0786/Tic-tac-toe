let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO =true; //playerX and playerY
let counter=0;

//Win pattern based on 2d matrix
const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//Giving recognition to Player X and Player O
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="#2b2d42";
            turnO=false;
        }
        else{
            box.innerText="X"
            box.style.color="#d90429";
            turnO=true;
        }
        box.disabled=true;
        counter++; //counter used for draw game
        if(counter===9){
            drawGame();
            // console.log(counter);
        }
        else{
            checkWinner();
        }
    });
});

//disable button for not selecting multiple boxes
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enable button for reseting the game for new game
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//message shows winner
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is Player ${winner}`;
    msgCon.classList.remove("hide");
    disableBtn();
}

//Reset button logic
const resetGame=()=>{
    turnO=true;
    counter=0;
    enableBtn();
    msgCon.classList.add("hide");
}

//Matching winning patterns and logic
const checkWinner=()=>{
    for(let pattern of winpat){
        let posVal1= boxes[pattern[0]].innerText;
        let posVal2= boxes[pattern[1]].innerText;
        let posVal3= boxes[pattern[2]].innerText;
        
        if (posVal1!="" && posVal2!="" &&posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                showWinner(posVal1);
            }
        }
    }
}


const drawGame=()=>{
    msg.innerText=`Game is Declared DRAW`;
    msgCon.classList.remove("hide");
    disableBtn();
}

//New button fucntionality
newbtn.addEventListener("click",resetGame);
//Reset button fucntionality
resetbtn.addEventListener("click",resetGame);