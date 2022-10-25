import { useState } from "react";

export default function Movies() {
    const myMovies = [
       {
        "Title": 'Star Wars: Episode I - The Phantom Menace',
        "Year": "1999",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Star Wars: Episode II - Attack of the Clones',
        "Year": "2002",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Star Wars: Episode III - Revenge of the Sith',
        "Year": "2005",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Star Wars: Episode IV - A New Hope',
        "Year": "1977",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Star Wars: Episode V - The Empire Strikes Back',
        "Year": "1980",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Star Wars: Episode VI - Return of the Jedi',
        "Year": "1983",
        "Type": "Movie",
        myGenres: 1,
        myDirectors: 1
        },
       {
        "Title": 'Transformers',
        "Year": "2007",
        "Type": "Movie",
        myGenres: 2,
        myDirectors: 2
        },
       {
        "Title": 'Transformers: Revenge of the Fallen',
        "Year": "2009",
        "Type": "Movie",
        myGenres: 2,
        myDirectors: 2
        },
       {
        "Title": 'Transformers: Dark of the Moon',
        "Year": "2011",
        "Type": "Movie",
        myGenres: 2,
        myDirectors: 2
        },
       {
        "Title": 'Transformers: Age of Extinction',
        "Year": "2014",
        "Type": "Movie",
        myGenres: 2,
        myDirectors: 2
        },
       {
        "Title": 'Transformers: The last Knight',
        "Year": "2017",
        "Type": "Movie",
        myGenres: 2,
        myDirectors: 2
        },
       {
        "Title": 'The sound of Music',
        "Year": "1965",
        "Type": "Movie",
        myGenres: 3,
        myDirectors: 3
        },
       {
        "Title": 'Ace Ventura: Pet detective',
        "Year": "1994",
        "Type": "Movie",
        myGenres: 4,
        myDirectors: 4
        },
       {
        "Title": 'The Conjuring',
        "Year": "2013",
        "Type": "Movie",
        myGenres: 5,
        myDirectors: 5
        },
       {
        "Title": 'Titanic',
        "Year": "1997",
        "Type": "Movie",
        myGenres: 6,
        myDirectors: 6
        }
    ];

    const myDirectors = [
        {value: 0, text: "-- Select a director --"},
        {value: 1, text: "George Lucas"},
        {value: 2, text: "Michael Bay"},
        {value: 3, text: "Robert Wise"},
        {value: 4, text: "Tom Shadyac"},
        {value: 5, text: "James Wan"},
        {value: 6, text: "James Cameron"}
    ]

    const myGenres = [
        {value: 0, text: "-- Select a genre --"},
        {value: 1, text: "Sci-fi"},
        {value: 2, text: "Action"},
        {value: 3, text: "Musical"},
        {value: 4, text: "Comedy"},
        {value: 5, text: "Horror"},
        {value: 6, text: "Drama"}
    ]

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

    const handleGenreSearch = (event) => {
        
    }

    const handleDirectorSearch = () => {
        
    }

    return(
        <section>
        <form onSubmit={handleGenreSearch}>
            <h3>Genres</h3>
            <Genres />
            <input type="text"
                value={genreSearch}
                onChange={(event) => setGenreSearch(event.target.value.toLowerCase())}></input>
            <button type="submit">Search</button>
        </form>
        
        <form onSubmit={handleDirectorSearch}>
            <h3>Director</h3>
            <Directors />
            <input type="text"
                value={directorSearch}
                onChange={(event) => setDirectorSearch(event.target.value.toLowerCase())}></input>
            <button type="submit">Search</button>
        </form>

        <h2>Browse</h2>
        {myMovies.map((movie, index) => (
                <div>
                    <ul>
                        <li>
                            <h2>{movie.Title}</h2>
                            <p>Production year: {movie.Year}</p>
                            <p>Genre: {movie.myGenres}</p>
                            <p>Director: {movie.myDirectors}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </section>
    )
   
}