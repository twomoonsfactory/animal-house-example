export class Animal{
    name: string
    childrenEaten: number
    constructor(newName: string){
        this.name = newName
        this.childrenEaten = 0 
    }
    ateKid(){
        this.childrenEaten++
    }
}