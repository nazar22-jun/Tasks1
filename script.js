"use script";

let numbersOfFilms = +prompt("Enter your count of watching films ");

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 1; i <= 2; i++) {
    let film = prompt("Your last watching film");
    let value = +prompt("Your rating", 0);
    personalMovieDB.movies[film] = value;
}