class Player {
    constructor(){
        this.index = null
        this.name = null
        this.distance = 0
        this.rank = null
    }

    //read the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }

    //write the playerCount to the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    //write the player name and distance to the database
    updateInfo(){
        database.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }

     //read the CarsAtEnd value from the database
     getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value",(data)=>{
            this.rank = data.val()
        })
    }

    //write the CarsAtEnd to the database
   static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd:rank
        })
    }
}