import {useParams} from 'react-router-dom';

function MovieDetail ({ movies }) {
    let { movieName } = useParams();
    let movie = movies.find((movie) => movie.title === movieName);
    return (
        <div className="movie-detail">
            <h1>{movie.title}</h1>
            <img src={`${movie.posterPath}`} />
            <h3>Release Date: {movie.releaseDate}</h3>
            <h3>Cast Members:</h3>
            <ul className="cast-members">
                {
                    movie.cast.map(actor => {
                        return <li key={actor}>{actor}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default MovieDetail;