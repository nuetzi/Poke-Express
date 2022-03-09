require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;


// Middleware -- Executes for all routes
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));


// Set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// SEED data
app.get('/pokemon/seed', (req, res) => {
    Pokemon.create([
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"},
        {name: "blastoise", img: "http://img.pokemondb.net/artwork/blastoise"}
    ], (err, data) => { res.redirect('/pokemon') });
});


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
    Pokemon.create(req.body, (err, createdPokemon) => {
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


// EDIT route - Gets the form, prepopulated, to edit the pokemon
// Goes beneath the DELETE route
app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {        // Find the Pokemon
      if (!err) {
        res.render('Edit', {pokemon: foundPokemon});                // Pass in the found Pokemon
    } else {
      res.send({ msg: err.message })
    }
    });
});


// PUT route -- Second part of the EDIT route
app.put('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/pokemon');
    });
});


// Connect to Mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});