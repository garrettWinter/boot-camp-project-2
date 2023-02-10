let movieId = [];
let movieInfo = [];

const fs = require('fs');

// Garretts API Key --  k_4rkr3seb
// Nicks API Key  -- k_4x8q801j
let activeAPIkey = 'k_4rkr3seb';

// This is the api for the bulk product details 1 movie at a time (shawshank)
// https://imdb-api.com/en/API/Title/k_4x8q801j/tt0111161/Posters,Images,Trailer,Ratings

//This is the 250 top movies
// https://imdb-api.com/en/API/Top250Movies/k_4x8q801j

getTop250Movies();

function getTop250Movies() {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_4rkr3seb")
        .then(function (response) {
            return response.json();
        })
        .then(function (movieParse) {
            console.log(movieParse.items[0].id);
            for (let i = 0; i < movieParse.items.length; i++) {
                movieId.push(movieParse.items[i].id);
            }
            console.log(movieId);
        })

    fs.writeFile('./rawIDs.json', movieId, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // getTop250MoviesData(movieId);
}

function getTop250MoviesData(movieId) {
    // fs.readFile('seeds/rawIDs.json', 'utf8', (error, data) =>
    // error ? console.error(error) : console.log(data))

    console.log("just kicked off getTop250MoviesData")
    // for (let i = 0; i < movieId.length; i++) {
    fetch('https://imdb-api.com/en/API/Title/k_4rkr3seb/tt0015324/Posters,Images,Trailer,Ratings')
        .then(function (response) {
            return response.json();
        })
        .then(function (movieParse) {
            // console.log("About to do the big parse");
            // movieInfo.push([
            //   movieParse.id,
            //   movieParse.fullTitle,
            //   movieParse.year,
            //   movieParse.image,
            //   movieParse.plot,
            //   movieParse.genreList,
            //   movieParse.contentRating,
            //   movieParse.rottenTomatoes,
            //   movieParse.imDb,
            //   movieParse.trailer.link,
            //   movieParse.trailer.videoDescription
            // ]);



            // for (let i = 0; i < 10 ; i++) { //movieParse.items.length
            //   movieInfo.push([
            //     movieParse[i].id,
            //     movieParse[i].title,
            //     movieParse[i].year,
            //     movieParse[i].image,
            //     movieParse[i].plot,
            //     movieParse[i].genreList,
            //     movieParse[i].contentRating,
            //     movieParse[i].rottenTomatoes,
            //     movieParse[i].imDb,
            //     movieParse[i].trailer.link,
            //     movieParse[i].trailer.videoDescription
            //   ]);
            //   console.log([i]);
            // }



            console.log(movieInfo);
            console.log("DONE!");
        })
}
