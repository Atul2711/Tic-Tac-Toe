console.log("Welcome to tic tac toe");
// Optional for adding sound in the game 
let music=new Audio("");
let next=new Audio ("");
let over=new Audio("");

let turn ="X";
let gameover=false;


//Function to change player
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
//Function to check for a winner
const checkwinner=()=>{
    let boxText=document.getElementsByClassName('move');
let win=[
[0,1,2,0,5,0],
[3,4,5,0,15,0],
[6,7,8,0,25,0],
[0,3,6,-10,15,90],
[1,4,7,0,15,90],
[2,5,8,10,15,90],
[0,4,8,0,15,45],
[2,4,6,0,15,-45]   
]
win.forEach(e =>{
if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText)&&(boxText[e[0]].innerText!=="")){
    document.querySelector('.info').innerText=boxText[e[0]].innerText+" won the game";
    document.querySelector('.info').style.color="green";
    gameover=true;
    document.querySelector('.line').style.width="30vh";
    document.querySelector('.line').style.transform=`translate(${e[3]}vh,${e[4]}vh) rotate(${e[5]}deg)`
}
})
} 
//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.move');
    element.addEventListener('click',()=>{
        if(boxText.innerText==""){
            boxText.innerText=turn;
            turn=changeTurn();
            checkwinner();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})


//Adding onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxText=document.querySelectorAll('.move');
    Array.from(boxText).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    gameover=false;
    document.querySelector('.info').style.color="black";
    document.querySelector('.line').style.width="0";
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
})