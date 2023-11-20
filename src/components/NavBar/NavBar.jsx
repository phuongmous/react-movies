import { Link } from 'react-router-dom';

function NavBar({ user }) {
    return(
        <nav>
            {user ?
            <div className="nav-bar">
                <Link to ="/">Movies List</Link>
                <Link to="/actors">Actors List</Link>
                <span>Welcome, {user}!</span>
            </div>
            :
            null
            }
        </nav>
    )
}

export default NavBar;