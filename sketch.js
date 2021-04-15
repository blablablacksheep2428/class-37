var ourgameState 
var myplayerCount 
var myGame
var mydataBase
var form
var player

function setup(){
    createCanvas(400,400);
    myGame = new Game()
    mydataBase= firebase.database()
    console.log("u there mate?")
    myGame.getGamestate()
    console.log("ourgamestate ="+ ourgameState)
    //myGame.startGame()
   
}
function draw(){
  background("red")
  console.log("ourgamestate ="+ ourgameState)
  if(ourgameState===0){
    myGame.startGame()
  }
  if(myplayerCount===4){
    ourgameState=1
    myGame.updateGamestate();
  }
  if(ourgameState===1){
    myGame.playGame();
  }
}
