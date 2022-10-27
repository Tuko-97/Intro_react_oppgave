import { useState } from "react";
import myDirectors from "./Directors"
import myGenres from "./Genres"
import myMovies from "./MovieList"

export default function Movies() {
    const [genreSearch, setGenreSearch] = useState('')
    const [directorSearch, setDirectorSearch] = useState('')
    
    const Genres = () => {
        return (
            <select onChange={handleGenreSearch} name="genres" id="genre-select">
                { myGenres.map((option, index) => (
                    <option
                        key={index} value={option.value}>
                            {option.text}
                    </option>
                ))} 
            </select> 
        )
    }

    const Directors = () => {
        return (
            <select onChange={handleDirectorSearch} name="directors" id="director-select">
                { myDirectors.map((option, index) => (
                    <option
                        key={index} value={option.value}>
                            {option.text}
                    </option>
                ))} 
            </select> 
        )
    }

    const MovieList = () => {
        return (
            <div>
                {myMovies.map((movie) => (
                    <ul>
                        <li>
                            <h2>{movie.Title}</h2>
                            <p>Production year: {movie.Year}</p>
                            <p>Genre: {movie.myGenres}</p>
                            <p>Director: {movie.myDirectors}</p>
                        </li>
                    </ul>
                ))}
            </div>
        )
    }

    const handleGenreSearch = (event) => {
        
    }

    const handleDirectorSearch = (event) => {
        
    }

    return(
        <section>
        <form onSubmit={handleGenreSearch}>
            <h2>Genres</h2>
            <Genres />
            <input type="text"
                value={genreSearch}
                onChange={(event) => setGenreSearch(event.target.value.toLowerCase())}></input>
            <button type="submit">Search</button>
        </form>
        
        <form onSubmit={handleDirectorSearch}>
            <h2>Director</h2>
            <Directors />
            <input type="text"
                value={directorSearch}
                onChange={(event) => setDirectorSearch(event.target.value.toLowerCase())}></input>
            <button type="submit">Search</button>
        </form>

        <h2>Browse</h2>
        <MovieList />
        </section>
    )
   
}