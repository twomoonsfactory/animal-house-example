export class AnimalService {
    private $http: any;
    private $log: any;
    constructor($http, $log) {
        this.$http = $http;
        this.$log = $log;
    }
    getAnimals() {
        return this.$http({
            method: 'GET',
            url: '/api/animals'
        }).then(function(response) {
            return response.data;
        });
    }
    addAnimal(animal) {
        this.$log.log('posting' + animal);
        return this.$http({
            method: 'POST',
            url: '/api/addAnimal',
            data: animal
        }).then(function(response){
            return response.data;
        });
    }
    pizzaEaten(animal) {
        return this.$http({
            method: 'POST',
            url: '/api/pizzaEaten',
            data: animal
        }).then(function(){
            this.$log.log(animal.name + ' ate a pizza');
        });
    }
}
AnimalService.$inject = ['$http', '$log']