import ActorCard from '../../components/ActorCard/ActorCard'
import './ActorListPage.css';
function ActorsListPage({ movies }) {
    return(
        <div>
            <ActorCard movies = { movies } />
        </div>
    )
}
export default ActorsListPage;