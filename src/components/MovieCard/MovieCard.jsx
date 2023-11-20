import { Link } from 'react-router-dom';

function MovieCard ({ movie }) {
    return(
        <div className="movie-card">
            <Link to={`/movies/${movie.title}`} className="movie-link">
                <div className="movie-poster" style={{ backgroundImage: `url('${movie.posterPath}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </div>
                <div className="movie-info">
                    <div  className="movie-info-content">
                        <h2>{movie.title}</h2>
                        <h4>Release Date: {movie.releaseDate}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard;