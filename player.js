class Player{
    constructor(){
        this.index=0
        this.name=null
        this.distance=0
    }
    getPlayerDetail(){

    }
    updatePlayerDetail(){

    }
    getPlayerCount(){
        var playerCountRef = mydataBase.ref('playercount')
        playerCountRef.on("value", function (data){
            myplayerCount = data.val()
            console.log("Number of players  = "+myplayerCount)
        })
    }
    updatePlayerCount(){
        var playerCountRef = mydataBase.ref('/')
        console.log("My player count = "+myplayerCount)
        playerCountRef.update({
            playercount:myplayerCount
        })
    }
    
}