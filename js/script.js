const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	generas: [],
	privat: false,
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	secondQuestion = prompt('На сколько его оцените?', ''),
	theersQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	foursQuesrion = prompt('На сколько его оцените?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[theersQuestion] = foursQuesrion;

console.log(personalMovieDB);

		
