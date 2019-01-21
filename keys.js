console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

var query = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

//OMDB API Key = e3eed826
//http://www.omdbapi.com/?i=tt3896198&apikey=e3eed826