require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var Spotify = new Spotify(keys.spotify); //Changed this variable to an uppercase. Change to lowercase if errors occur.
