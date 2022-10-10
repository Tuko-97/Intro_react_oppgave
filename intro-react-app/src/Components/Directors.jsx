export default function Directors() {
    const myDirectors = [
       {value: '', text: '--Choose a director--'},
       {value: 'georgeLucas', text: 'George Lucas'},
       {value: 'jjAbrams', text: 'J. J. Abrams'},
       {value: 'michaelBay', text: 'Michael Bay'},
       {value: 'robertWise', text: 'Robert Wise'},
       {value: 'tomShadyac', text: 'Tom Shadyac'},
       {value: 'jamesWan', text: 'James Wan'},
       {value: 'jamesCameron', text: 'James Cameron'}
    ];
    
    const handleChange = event => {
        console.log(event.target.value);
    };

    return(
        <>
        <select onChange={handleChange} name="director" id="director-select">
            {myDirectors.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
        </>
    )
}