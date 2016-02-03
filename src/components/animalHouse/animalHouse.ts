import {Animal} from './animals.ts'

export class AnimalHouse {
    private animals: Animal[] = [];
    private animalList: string[] = ['Zebra', 'Giraffe', 'Alligator', 'T-Rex', 'Dodo'];
    private newAnimal: string = "";
    private $log: any;
    private errorMessage: string;
    private animalService: any;
    constructor($log, animalService) {
        this.$log = $log;
        this.animalService = animalService;
        this.$log.log('initialized');
        for (let i = 0; i < this.animalList.length; i++) {
            this.animals.push(new Animal(this.animalList[i]));
            this.$log.log('New animal pushed. ' + this.animals[i].name);
        }
    }
    addAnimal() {
        try {
            this.errorMessage = "";
            if (this.newAnimal.length === 0 || this.newAnimal.trim() === "")
                //checks that newAnimal is not blank and contains characters other than whitespace
                throw 'The new animal\'s name cannot be blank.';
            if (this.newAnimal === null)
                throw 'The new animal is null.';
            if (this.animalExists(this.newAnimal))
                throw 'That animal already exists.';
            this.animals.push(new Animal(this.newAnimal));
            this.animalService.addAnimal(this.newAnimal);
            this.$log.log('New animal pushed. ' + this.animals[this.animals.length - 1].name);
            this.newAnimal = "";
        }
        catch (err) {
            this.$log.log('Error logged: ' + err);
            this.errorMessage = "Error: " + err;
        }
    }
    animalExists(newAnimal) {
        for (let i = 0; i < this.animals.length; i++) {
            if (newAnimal === this.animals[i].name)
                return true;
        }
        return false;
    }
}
AnimalHouse.$inject = ['$log', 'animalService']