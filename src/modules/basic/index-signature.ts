type Movie = {
    title: string;
    year: number;
    [key: string | number] : string | number | boolean
}
type Movies = {
    [key: string] : Movie
}

let movies = {
    movieFirst: {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi"
    },
    movieSecond: {
        title: "Spider-Man: Beyond the Spider-Verse",
        director: " Joaquim Dos Santos",
        year: 2025,
        genre: "Animation"
    },
    movieThird: {
        title: "Project Hail Mary",
        director: "Phil Lord & Christopher Miller",
        year: 2026, // Lançamento previsto para este ano!
        genre: "Sci-Fi"
    }
};
// Acontece quando está com um design adequado 

export function showMovies(movies: Movies){
    console.log(movies)
}
showMovies(movies)