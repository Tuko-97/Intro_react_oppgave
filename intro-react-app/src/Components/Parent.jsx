import Genres from "./Genres"
import Directors from "./Directors"
import Movies from "./Movies"

export default function Parent() {
    return(
        <>
        <h1>Hello World!</h1>
            <form>
                <h3>Genres</h3>
                <Genres />
                <button>Search</button>
            </form>

            <form>
            <h3>Director</h3>
                <Directors />
                <button>Search</button>
            </form>
            <Movies />
        </>
    )
}