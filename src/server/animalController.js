var Animal = require('./Animal');
    
module.exports = {
    //get all animals and history
    getAllAnimals: function(req, res) {
        Animal.find({}, function(err, animals) {
            if (err) return res.status(500).send(err);
            else res.send(animals);
        });
    },
    //get today's information
    //get yesterday's information
    //get the rolling week's information
    //get the rolling month's information
    //add a new animal
    addAnimal: function(req, res) {
        console.log(req.body);
        var newAnimal = Animal(req.body);
        newAnimal.save(function(err){
            if(err) throw err;
            console.log(newAnimal.name + 'added');
        })
    },
    //add a pizza eaten (check if history exists for today and increment if so)
    pizzaEaten: function(req, res) {
        var today = new Date();
        var query = {name: req.body.name, species: req.body.species};
        var update = {$push: {'history': {year: today.getFullYear(), month: today.getMonth()+1, day: today.getDate()}}};
        Animal.findOneAndUpdate(query, update, function(err, animal){
            if (err){
              console.log(err + " " + animal);
              return res.status(501).send(err);  
            }
            console.log(animal);
        });
    }
}