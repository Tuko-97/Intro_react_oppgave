export default function Genres() {
    const myGenres = [
       {value: '', text: '--Choose a genre--'},
       {value: 'action', text: 'Action'},
       {value: 'sciFi', text: 'Sci-Fi'},
       {value: 'drama', text: 'Drama'},
       {value: 'comedy', text: 'Comedy'},
       {value: 'horror', text: 'Horror'},
       {value: 'musical', text: 'Musical'}
    ];
    
    const handleChange = event => {
        console.log(event.target.value);
    };

    return(
        <>
        <select onChange={handleChange} name="genres" id="genre-select">
            {myGenres.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
        </>
    )
}