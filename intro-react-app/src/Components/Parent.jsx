import Genres from "./Genres"
import Directors from "./Directors"
import Movies from "./Movies"

export default function Parent() {

    const genreSearch = () => {
        
    }

    const directorSearch = () => {
        
    }

    return(
        <>
        <h1>Hello World!</h1>
            <form>
                <h3>Genres</h3>
                <Genres />
                <button onClick={genreSearch}>Search</button>
            </form>

            <form>
            <h3>Director</h3>
                <Directors />
                <button onClick={directorSearch}>Search</button>
            </form>
            <Movies />
        </>
    )
}