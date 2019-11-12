var 
    uniqueRandomArray   = require('unique-random-array');
    starWarsName        = require('./starwars-names.json');

module.exports = {
    all: starWarsName ,
    random: uniqueRandomArray( starWarsName )
};


