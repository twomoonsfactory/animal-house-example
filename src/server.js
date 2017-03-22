// setting the correct environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 8080;

// node modules
var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var app = express();

// Controllers
var animalController = require('./server/animalController');

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Serve public directory
app.use(express.static('../public'));

// Endpoints
app.get('/api/animals', animalController.getAllAnimals);
// app.get('/api/animalsToday', animalController.getToday);
// app.get('/api/animalsYesteray', animalController.getYesterday);
// app.get('/api/animalsWeek', animalController.getWeek);
// app.get('/api/animalsMonth', animalController.getMonth);
app.post('/api/addAnimal', animalController.addAnimal);
app.post('/api/pizzaEaten', animalController.pizzaEaten);


// Connections
var mongoUri = 'mongodb://localhost:27017/animal-house';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
