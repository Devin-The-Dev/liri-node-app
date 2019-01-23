//Require variables
require("dotenv").config();
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require('fs');
var request = require('request');

//API key variables
var spotify = new Spotify(keys.spotify);
var bitKey = keys.bit.key;
var omdb = keys.omdb.key;

function search() {
    var searchTerm = process.argv[2];
    var searchName = process.argv[3];
    dataBase(searchTerm, searchName)
}

function dataBase(searchTerm, searchName) {
    switch (searchTerm) {
        case 'spotify-this-song':
            {
                searchSpotify(searchName)
            }
            break;
        default:
            {
                console.log('Something is broken');
            }
    }
}

function searchSpotify(searchName) {
    spotify.searchName({
        trype: 'track',
        query: search
    }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        var results = data.tracks.items[0];
        console.log(results.name)
        console.log(results.href)
        console.log(results.album.name)
    });
}
search();