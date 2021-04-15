class Game{
    constructor(){

    }
    getGamestate(){
    var ourgameStateref=mydataBase.ref("gamestate");
    console.log("ourgamestateref" + ourgameStateref);

    ourgameStateref.on("value", function(data){

         ourgameState=data.val()
        //value of gameState
        console.log("value " + data.val())
    })
    }
    updateGamestate(){
        var gamestateRef = mydataBase.ref('/')
        console.log("My Gamestate = "+ourgameState)
        gamestateRef.update({
            gamestate:ourgameState
        })
    }
    startGame(){
        form = new Form();
        form.displayForm();
        player = new Player();
        player.getPlayerCount();
    }
    playGame(){

    }
    endGame(){
        
    }
}