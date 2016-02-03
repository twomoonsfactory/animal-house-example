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
            this.$log.log("Animals Retrieved");
        });
        return deferred.promise;
    }
    //getAnimalsToday
    //getAnimalsYesterday
    //getAnimalsWeek
    //getAnimalsMonth
    addAnimal(animal) {
        this.$log.log(animal);
        var deferred = this.$q.defer();
        this.$http({
            method: "POST",
            url: 'http://localhost:5001/api/animal/' + animal
        }).then(function(response){
            deferred.resolve(response.data);
            this.$log.log(animal + " added");
        });
        return deferred.promise;
    }
    //childEaten
}
AnimalService.$inject = ['$q', '$http', '$log']