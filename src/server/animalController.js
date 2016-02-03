var Animal = require('./Animal'),
    DietHistory = require('./DietHistory');
    
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
        var newAnimal = new Animal(req.params.animal)
        .save(function(err, animal) {
            if (err) return res.status(500).send(err);
            else res.send(animal);
        });
    }
    //add a child eaten (check if history exists for today and increment if so)
}