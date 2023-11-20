import './App.css';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import { movies } from "../../data.js";

import  {useState} from 'react';
import SignUpPage from '../SignUpPage/SignUpPage';
import MovieDetailPage from  '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from  '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user  ?
      <>
        <BrowserRouter>
          <NavBar user={user}/>
          <Routes>
            <Route path="/" element={ <MoviesListPage movies={ movies } /> } />
            <Route path="/movies/:movieName" element={ <MovieDetailPage movies={ movies }/> } />
            <Route path="/actors" element={ <ActorListPage movies={ movies } /> } />
          </Routes>
        </BrowserRouter>
      </>
      :
      <SignUpPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
