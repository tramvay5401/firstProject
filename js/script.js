"use strict"


let numbersOfFilms ;

function start() {
	 numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
		numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numbersOfFilms,
	movies: {},
	actors: {},
	generas: [],
	privat: false,
};

function remrmberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько его оцените?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}

	}
}
remrmberMyFilms();

function decetPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Вы посмотрели довольно мало Фильмов!');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы посмотрели достаточно Фильмов');
	} else if (personalMovieDB.count >= 30) {
		console.log('ВЫ киноман!');
	} else {
		console.log('Произошла Ошибка');
	}
}
decetPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);


function writeYourGeneras() {
	for (let i = 1; i <= 3; i++){
		const genre = prompt(`Ваш любимый жанр под помером${i}`)
		personalMovieDB.generas[i - 1] = genre;
	}
}

writeYourGeneras();


