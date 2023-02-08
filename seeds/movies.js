//Example seed Data, consts and functions are replaceable, but the data in the array is what we need for now.

const { Gallery } = require('../models');

const movieData = [
    {
        name: 'Dune',
        image: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg',
        long_description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        year_released: '2021-10-22',
        imDb_rating: 'imDb8',
        rating: 'PG-13',
        genre: 'Science_fiction',
    },
    {
        name: 'American Psycho',
        image: 'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6762_AL_.jpg',
        long_description: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic f...',
        year_released: '2000',
        imDb_rating: 'imDb7.6',
        rating: 'R',
        genre: 'Horror',
    },
    {
        name: 'Happy Gilmore',
        image: 'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6762_AL_.jpg',
        long_description: "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
        year_released: '1996',
        imDb_rating: 'imDb7',
        rating: 'PG-13',
        genre: 'Comedy',
    },
    {
        name: 'Avengers Endgame',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6757_AL_.jpg',
        long_description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        year_released: '2019',
        imDb_rating: 'imDb8.4',
        rating: 'PG-13',
        genre: 'Action',
    },
    {
        name: 'Titanic',
        image: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6757_AL_.jpg',
        long_description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        year_released: '1997',
        imDb_rating: 'imDb7.9',
        rating: 'PG-13',
        genre: 'Drama',
    },
];
//Possibly add short description to be populated later
//This data can be multiplied by 5 for testing functional use of more important parts of the project. 

const seedGallery = () => Gallery.bulkCreate(movieData);

module.exports = seedGallery;