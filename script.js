// const arr = []

// function fourthTask() {
//     let i = 2;

// while (i <= 16) {
//     if (i%2 !== 0) {
//         const array = arr.push(i)
//     }
//     i++
// }
// }
// fourthTask()

// let num = []
// for (let i = 5; i <= 10; i++) {
//     num.push(i)
// }

// console.log(num)

// let arr = [5,1,'shopping',20, 'homework'] 
// function uzg (arr) {
//     let newdata = arr.filter((item) => item.typeOf()===number) 
//     return {newdata}
// }

// uzg()

// 'filmi'
let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    private:true
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt ('Последный фильм который вы посмотрели'),
                b = prompt ('Оцените фильм по 10 бальной шкале');
    
        if(a != null && b!= null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            --i;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (numberOfFilms <= 10) {
        console.log ('Вы не любите кино')
    } else if (numberOfFilms > 10 && numberOfFilms < 20 ) {
        console.log( 'Вы обичный зритель')
    } else if (numberOfFilms > 20 && numberOfFilms < 50 ) {
        console.log ('Вы киноман')
    } else {console.log('Офигеть')}
}

detectPersonalLevel()

function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB)
    }
}

showMyDB(personalMovieDB.private)

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i -1] = genre;
    }
}

writeYourGenres()

console.log(personalMovieDB);


// function showFirstMassage() {
//     console.log("hello")
// }

// showFirstMassage()






// function counting(a , b ) {
//     for(let i = 1; i <= b ; i++) {
//         `${a*=i}`
//     }
//     return a
// }

// console.log(counting(2 ,3))


// function counting(a, b) {
//     let nomi = '';
//     for (let i = 1; i <= b; i++) {
//             nomi += `${a * i}---`
//         }
//     return nomi;
// }


// console.log(counting(5,10))





// const doni = "hello world"

// console.log(doni.slice(6 , 11))

// console.log(doni.substring(0,5))

// console.log(doni.substr(6,  5)) //kol simvolov na vtorom orgumente


// numers

// const nomer = 12.1
// console.log(Math.round(nomer))


// const test = "12.1px"
// console.log(parseInt(test))