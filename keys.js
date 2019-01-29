console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bit = {
    key: process.env.BIT_Key
}

exports.omdb = {
    key: process.env.OMDB_Key
}

//var bandsintown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

//var omdb = "http://www.omdbapi.com/?i=tt3896198&apikey=e3eed826&t=" + movieTitle;
