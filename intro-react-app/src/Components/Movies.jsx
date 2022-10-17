import { useState, useEffect } from "react";

export default function Movies(props) {
    const [myMovies, setMyMovies] = useState([
       {
        "Title": 'Star Wars: Episode I - The Phantom Menace',
        "Year": "1999",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Star Wars: Episode II - Attack of the Clones',
        "Year": "2002",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Star Wars: Episode III - Revenge of the Sith',
        "Year": "2005",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Star Wars: Episode IV - A New Hope',
        "Year": "1977",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Star Wars: Episode V - The Empire Strikes Back',
        "Year": "1980",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Star Wars: Episode VI - Return of the Jedi',
        "Year": "1983",
        "Type": "Movie",
        "Genre": "Sci-Fi",
        "Director": "George Lucas"
        },
       {
        "Title": 'Transformers',
        "Year": "2007",
        "Type": "Movie",
        "Genre": "Action",
        "Director": "Michael Bay"
        },
       {
        "Title": 'Transformers: Revenge of the Fallen',
        "Year": "2009",
        "Type": "Movie",
        "Genre": "Action",
        "Director": "Michael Bay"
        },
       {
        "Title": 'Transformers: Dark of the Moon',
        "Year": "2011",
        "Type": "Movie",
        "Genre": "Action",
        "Director": "Michael Bay"
        },
       {
        "Title": 'Transformers: Age of Extinction',
        "Year": "2014",
        "Type": "Movie",
        "Genre": "Action",
        "Director": "Michael Bay"
        },
       {
        "Title": 'Transformers: The last Knight',
        "Year": "2017",
        "Type": "Movie",
        "Genre": "Action",
        "Director": "Michael Bay"
        },
       {
        "Title": 'The sound of Music',
        "Year": "1965",
        "Type": "Movie",
        "Genre": "Musical",
        "Director": "Robert Wise"
        },
       {
        "Title": 'Ace Ventura: Pet detective',
        "Year": "1994",
        "Type": "Movie",
        "Genre": "Comedy",
        "Director": "Tom Shadyac"
        },
       {
        "Title": 'The Conjuring',
        "Year": "2013",
        "Type": "Movie",
        "Genre": "Horror",
        "Director": "James Wan"
        },
       {
        "Title": 'Titanic',
        "Year": "1997",
        "Type": "Movie",
        "Genre": "Drama",
        "Director": "James Cameron"
        }
    ]);
    
    return(
        <>
            {myMovies.map((movie, index) => (
                <div>
                    <ul>
                        <li>
                            <h2>{movie.Title}</h2>
                            <p>Production year: {movie.Year}</p>
                            <p>Genre: {movie.Genre}</p>
                            <p>Director: {movie.Director}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
   
}