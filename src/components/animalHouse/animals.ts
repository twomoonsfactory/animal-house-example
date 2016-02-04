export class Animal {
    name: string
    childrenEaten: number
    species: string
    history: any
    constructor(newName: string, newSpecies: string, newHistory: any) {
        this.name = newName
        this.species = newSpecies
        this.childrenEaten = 0
        this.history = newHistory
    }
    ateKid() {
        this.childrenEaten++
    }
}