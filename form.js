class Form {
    constructor(){
     this.title = createElement("h1")
        this.input = createInput("name")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")
        this.reset = createButton("reset")
    } 
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
      
        this.title.html("car racing")
        this.title.position(displayWidth/2,0)
        this.reset.position(displayWidth-100,20)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
      
       this.button.position(displayWidth/2+30,displayHeight/2)
       this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
          
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.updateState(0)
        })
    }

}