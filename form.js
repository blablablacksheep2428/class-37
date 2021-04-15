class Form{
    constructor(){
            this.title = createElement('h2')
            this.button = createButton("button")
            this.input = createInput("Please enter Username")
            this.greeting = createElement('h3')
    }
    displayForm(){      
     
            this.title.html("Car race game")
            this.title.position(350,0)
            this.button.position(600,200)
            this.input.position(600,160)
            this.button.mousePressed(()=>{
                player.name = this.input.value()
                myplayerCount=myplayerCount + 1
                player.index=myplayerCount
                player.updatePlayerCount()
                this.myHide()
                this.greeting.html("Hello there, "+player.name)

                this.greeting.position(600,160)
        })
    }

            myHide(){
            this.input.hide()    
            this.button.hide()
            }
}