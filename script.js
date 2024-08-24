const numberOfFilms = +prompt ('Сколько фильмов?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};

const   a = prompt ('posledniy film'),
        b = prompt ('ocenite'),
        c = prompt ('posledniy film'),
        d = prompt ('ocenite');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);