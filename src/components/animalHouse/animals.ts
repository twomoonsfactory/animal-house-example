export class Animal {
    name: string
    pizzasEaten: number
    species: string
    history: any
    constructor(newName: string, newSpecies: string, newHistory: any) {
        this.name = newName
        this.species = newSpecies
        this.pizzasEaten = 0
        this.history = newHistory
    }
    atePizza() {
        this.pizzasEaten++
    }
}