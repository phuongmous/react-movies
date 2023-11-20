
function ActorCard({  movies }) {
    const  uniqueActors  = new Set();
    movies.forEach((movie) => {
        console.log(movie.cast)
        movie.cast.forEach((actor) => {
            uniqueActors.add(actor);
        });
    });
    const uniqueActorArray = Array.from(uniqueActors);
    return(
        <div className="actor-list">
            <h1>Actors List</h1>
            <ul className="actor-card-container">
                {uniqueActorArray.map((actor) => {
                    return(
                        <div className="actor-card" key={actor}>
                        <img className="actor-poster" src={`https://picsum.photos/200/300?random=${actor}`} alt={actor} />
                        <div className="actor-info">{actor}</div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ActorCard;