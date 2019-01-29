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
//var omdb = keys.omdb.key;

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
        case 'concert-this':
            {
                searchBIT(searchName)
            }
        // case 'movie-this':
        //     {
        //         searchOMDB(searchName)
        //     }
        default:
            {
                console.log('Something is broken');
            }
    }
}

function searchSpotify(searchName) {
    spotify.search({
        type: 'track',
        query: searchName
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

//BIT is to request data from DB and return response in terminal


function searchBIT(searchName) {
    //request information from BIT 
    //console.log next concert
    let url = `https://rest.bandsintown.com/artists/${encodeURI(searchName)}/events?app_id=${bitKey}`;
    // console.log(url)
    axios.get(url)
        .then(function (response) {
            console.log(response.data[1]);
            for (i = 0; i < response.data.length; i++) {
                console.log('\n---------\n');
                console.log(`Venue: ${response.data[0].venue.name}`);
                console.log(`City: ${response.data[0].venue.city}`);
                console.log(`Region: ${response.data[0].venue.region}`);
                console.log(`Country: ${response.data[0].venue.country}`);
                console.log(`Date: ${response.data[0].datetime}`);
            }
            console.log('\n---------\n');
        })
        .catch(function (error) {
            console.log(error);
        });
}

// function searchOMDB(searchName) {
//     let movieURL =
//         axios.get(movieURL)//Incert variable
//      .then(function (response) {
//          console.length(response.data[1]);
//          for (j = 0; j < response.data.length; j++)
//      });
// }
search();