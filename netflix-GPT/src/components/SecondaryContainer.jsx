import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)

    
    return (
        movies && 
        (
        <div className=" bg-black">
            <div className="-mt-60 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
            </div>
            {/* /**
             movielist- popular 
                moviecard*n
             movielist- nowplaying 
             movielist- trending
             movielist- horror
            
             */ }
            
            
        </div>)
    )
}

export default SecondaryContainer