import MovieCard from "../../components/MovieCard/MovieCard"
import './MoviesListPage.css';
function MoviesListPage({ movies }) {
    // console.log(movies);
    return(
        <div className="movie-container">
            <h1>Movies List</h1>
            <ul className="movie-card-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </ul>
        </div>
    )
}
export default MoviesListPage;