export class AnimalService {
    private $q: any;
    private $http: any;
    private $log: any;
    constructor($q, $http, $log) {
        this.$q = $q;
        this.$http = $http;
        this.$log = $log;
    }
    getAnimals() {
        var deferred = this.$q.defer();
        this.$http({
            method: "GET",
            url: 'http://localhost:5001/api/animals'
        }).then(function(response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }
    addAnimal(animal) {
        this.$log.log(animal);
        var deferred = this.$q.defer();
        this.$http({
            method: "POST",
            url: 'http://localhost:5001/api/addAnimal',
            data: animal
        }).then(function(response){
            deferred.resolve(response.data);
            this.$log.log(animal.name + " added");
        });
        return deferred.promise;
    }
    childEaten(animal) {
        var deferred = this.$q.defer();
        this.$http({
            method: "POST",
            url: 'http://localhost:5001/api/childEaten',
            data: animal
        }).then(function(){
            this.$log.log(animal.name + " ate a kid");
        });
    }
    
}
AnimalService.$inject = ['$q', '$http', '$log']