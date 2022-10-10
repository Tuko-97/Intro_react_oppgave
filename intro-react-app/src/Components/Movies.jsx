export default function Movies() {
    const myMovies = [
       {value: 'starWarsI', title: 'Star Wars I, The Phantom Menace', genre: 'sciFi'},
       {value: 'starWarsII', title: 'Star Wars II, Attack of the Clones', genre: 'sciFi'},
       {value: 'starWarsIII', title: 'Star Wars III, Revenge of the Sith', genre: 'sciFi'},
       {value: 'starWarsIV', title: 'Star Wars IV, A New Hope', genre: 'sciFi'},
       {value: 'starWarsV', title: 'Star Wars V, The Empire Strikes Back', genre: 'sciFi'},
       {value: 'starWarsVI', title: 'Star Wars VI, Return of the Jedi', genre: 'sciFi'},
       {value: 'transformersI', title: 'Transformers', genre: 'sciFi'},
       {value: 'transformersII', title: 'Transformers: Revenge of the Fallen', genre: 'action'},
       {value: 'transformersIII', title: 'Transformers: Dark of the Moon', genre: 'action'},
       {value: 'transformersIV', title: 'Transformers: Age of Extinction', genre: 'action'},
       {value: 'transformersV', title: 'Transformers: The last Knight', genre: 'action'},
       {value: 'theSoundOfMusic', title: 'The sound of Music', genre: 'musical'},
       {value: 'aceVentura', title: 'Ace Ventura: Pet detective', genre: 'comedy'},
       {value: 'theConjuring', title: 'The Conjuring', genre: 'horror'},
       {value: 'titanic', title: 'Titanic', genre: 'drama'}
    ];
    
    return(
        <section>
            {myMovies.map((title, index) => (
                <>
                <h2 key={index}>{title.title}</h2>
                <p key={index}>Genre: {title.genre}</p>
                </>      
            ))}
        </section>
    )
}