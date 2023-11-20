import MovieDetail from '../../components/MovieDetail/MovieDetail';
import './MovieDetailPage.css';

function MovieDetailPage({ movies }) {
    return(
        <div className="movie-detail-container">
            <MovieDetail movies={ movies } />
        </div>
    )
}
export default MovieDetailPage;