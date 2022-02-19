/*JS CHOOR DOOR*/

let doorImage1=document.getElementById("door-1");
let doorImage2=document.getElementById("door-2");
let doorImage3=document.getElementById("door-3");
let botDoorPath= "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath= "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath= "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closeDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numClosedDoor= 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton=document.getElementById("start");
let currentlyPlaying=true;

doorImage1.onclick= function(){
   //doorImage1.src=botDoorPath;
   if(currentlyPlaying && !isClicked(openDoor1)){
      doorImage1.src=openDoor1
      playDoor(doorImage1);
      if(!isClicked(openDoor1)){
      }
   };
};

doorImage2.onclick= function(){
   //doorImage2.src=beachDoorPath;
   if(currentlyPlaying && !isClicked(openDoor2)){
      doorImage2.src=openDoor2;
      playDoor(doorImage2);
      if(!isClicked(openDoor2)){
      }
   };
};

doorImage3.onclick= function(){
   //doorImage3.src=spaceDoorPath;
   if(currentlyPlaying && !isClicked(openDoor3)){
      doorImage3.src=openDoor3;
      playDoor(doorImage3);
      if(!isClicked(openDoor3)){
      }
   };
};

function startRound(){
   currentlyPlaying=true;
   startButton.innerHTML="Good Luck!";
   doorImage1.src=closeDoorPath;
   doorImage2.src=closeDoorPath;
   doorImage3.src=closeDoorPath;
   numClosedDoor= 3;
   randomDoorGenerator();
};

startButton.onclick=function(){
   startRound()
};

function gameOver(status){
   if(status==="win"){
      startButton.innerHTML="You Win!!! Play again?";
   }else{
      startButton.innerHTML="Game over! Play again?"
   };
   currentlyPlaying=false;
};

function randomDoorGenerator(){
   let choreDoor=Math.floor(Math.random()*numClosedDoor);
   if (choreDoor===0){
      openDoor1=botDoorPath;
      openDoor2=spaceDoorPath;
      openDoor3=beachDoorPath;
   }else if (choreDoor===1){
      openDoor1=beachDoorPath;
      openDoor2=botDoorPath;
      openDoor3=spaceDoorPath;
   }else{
      openDoor1=spaceDoorPath;
      openDoor2=beachDoorPath;
      openDoor3=botDoorPath;
   }
};

function playDoor(door){
   numClosedDoor-=1;
   if(numClosedDoor===0){
      gameOver("win");
   }else if (isBot(door)){
      gameOver()
   }
};

function isClicked(door){
   if(door.src=closeDoorPath){
      return false;
   }else{
      return true;
   };
};

function isBot(door){
   if(door.src===botDoorPath){
      return true;
   }else{
      return false;
   };
};

startRound();
