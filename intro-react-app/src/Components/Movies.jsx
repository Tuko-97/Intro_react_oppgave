export default function Movies() {
    const myMovies = [
       {value: 'starWarsI', title: 'Star Wars I, The Phantom Menace'},
       {value: 'starWarsII', title: 'Star Wars II, Attack of the Clones'},
       {value: 'starWarsIII', title: 'Star Wars III, Revenge of the Sith'},
       {value: 'starWarsIV', title: 'Star Wars IV, A New Hope'},
       {value: 'starWarsV', title: 'Star Wars V, The Empire Strikes Back'},
       {value: 'starWarsVI', title: 'Star Wars VI, Return of the Jedi'},
       {value: 'transformersI', title: 'Transformers'},
       {value: 'transformersII', title: 'Transformers: Revenge of the Fallen'},
       {value: 'transformersIII', title: 'Transformers: Dark of the Moon'},
       {value: 'transformersIV', title: 'Transformers: Age of Extinction'},
       {value: 'transformersV', title: 'Transformers: The last Knight'},
       {value: 'theSoundOfMusic', title: 'The sound of Music'},
       {value: 'aceVentura', title: 'Ace Ventura: Pet detective'},
       {value: 'theConjuring', title: 'The Conjuring'},
       {value: 'titanic', title: 'Titanic'}
    ];
    
    return(
        <section>
            {myMovies.map((title, index) => (
                <>
                <h2 key={index}>{title.title}</h2>
                </>      
            ))}
        </section>
    )
}