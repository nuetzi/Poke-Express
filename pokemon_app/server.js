require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');


const port = process.env.PORT || 3000;

// Middleware -- Executes for all routes
app.use(express.urlencoded({extended: true}));

// Set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//
// Put SEED values here if needed
//


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});


// INDEX route
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon});
    });
});


// Create a page that will allow us to add a new Pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});


// POST -- Creates a new Pokemon
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon');
    });
});


// Add a SHOW route
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon});
    });
});


// DELETE route -- Goes beneath SHOW route
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon');
    });
});


// Connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to mongo');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});