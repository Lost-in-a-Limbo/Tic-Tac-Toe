let boxes=document.querySelectorAll(".box");
let Resetbtn=document.querySelector("#Reset-btn");
let turnx=true;
let newGamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let count=0;
let winnerFound=false;

const winPatterns=[
    [0,1,2],
    [3,4,5,],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7] 
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnx){
        box.innerText="X"
        turnx=false;
       }
       else{
        box.innerText="O"
        turnx=true;
       }
     count++;
       box.disabled=true;
       checkWinner();
    })
  
});



const checkWinner=()=>{
    for( let pattern of winPatterns){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!=""&&pos2!=""&&pos3!=""){
                if(pos1===pos2&&pos2===pos3){
                    console.log("Winner",pos1);
                    ShowWinner(pos1);
                    winnerFound=true;
                    return;
                }


            }
    }
    if (count === 9 && !winnerFound) {
        Draw();
    }
};


const ShowWinner=(Winner)=>{
    msg.innerText=`Congratulation the Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const Draw=()=>{
    msg.innerText=` The game is Draw!!! `;
    msgcontainer.classList.remove("hide");
}


const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame=()=>{
    turnx=true;
    enabledboxes();
    winnerFound=false;
    msgcontainer.classList.add("hide");
    count=0;
}

newGamebtn.addEventListener("click",resetgame);
Resetbtn.addEventListener("click",resetgame);