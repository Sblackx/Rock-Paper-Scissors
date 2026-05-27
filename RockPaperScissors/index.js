const arr = ["rock", "paper", "scissors"];
let player_score = 0;
let computer_score = 0;
const player = document.getElementById("player_choice");
const computer = document.getElementById("computer_choice");
const playerS = document.getElementById("player_score");
const computerS = document.getElementById("computer_score");
function choose(num) {
  num--;
  let comp = Math.floor(Math.random() * 3);
  player.textContent = arr[num];
  computer.textContent = arr[comp];

  if (comp == num) {
   decide("Fair");
  }else{
    if(comp===0&&num===1 || comp===1&&num===2 || num===0&&comp===2){
        decide("Win");
        player_score++;
        playerS.textContent = `${player_score}`;
    }else{
        decide("Lose");
        computer_score++;
        computerS.textContent = `${computer_score}`;
    }
  }
}
function decide(text){
    let display = document.getElementById("display");
    display.textContent = text;
    let style = display.style;
    if(text==="Win")
        style.color = "green";
    if(text==="Lose")style.color = "Darkred";
    if(text==="Fair") style.color = "black";
    style.fontSize = "7rem";

   
    setTimeout(() => {
      display.textContent = "";
    }, 1000);
}
