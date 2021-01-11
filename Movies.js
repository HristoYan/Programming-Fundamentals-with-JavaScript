function solve(array) {
    let dataBase = [];

    for (const instruction of array) {
        if (instruction.includes('addMovie')) {
            let movieInfo = {};
            let added = instruction.split(' ');
            added.shift();
            let addedString = added.join(' ');

            movieInfo.name = addedString;
            dataBase.push(movieInfo);
        } else if (instruction.includes('directedBy')) {
            let [name, director] = instruction.split(' directedBy ');
            let myMovie = dataBase.find(x => x.name == name);

            if (myMovie) {

                myMovie.director = director;

            }
        } else {
            let [name, date] = instruction.split(' onDate ');
            let myMovie = dataBase.find(x => x.name == name);

            if (myMovie) {

                myMovie.date = date;

            }
        }
    }

    dataBase.forEach( movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}


solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);